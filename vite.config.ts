import { defineConfig } from 'vite'
import * as path from 'path';
import postCssPxToRem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import * as dotenv from 'dotenv';

const { config: loadConfig } = dotenv;

import * as fs from 'fs';
import preact from '@preact/preset-vite';

let { NODE_ENV = '', BUILD_ACT = '' } = process.env;


const ENV_CONFIG_PATH =path.resolve(__dirname, 'env', `.env.${NODE_ENV}`);
console.log("==ENV_CONFIG_PATH==",ENV_CONFIG_PATH)
// vite 读取env 配置
loadConfig({
  path: ENV_CONFIG_PATH,
});


// 活动目录
const PAGES_PATH = path.resolve(process.cwd(), 'src/activitys');




const getActivitiesDefine = function getActivitiesDefine() {
  const activities = [];
  return [BUILD_ACT];
  // BUILD_DIRS.forEach(dir => {
  //     let fileUrl = path.resolve(PAGES_PATH, dir, 'index.html');
      
  //     if (fs.existsSync(fileUrl)) {
  //         activities.push(dir);
  //     }
  // });
  // return activities;
};


const getEntries = function findEntries(isDev) {
  console.log("entry===",path.resolve(PAGES_PATH, BUILD_ACT, 'index.html'));
  let entrys={ [`${BUILD_ACT}`]: path.resolve(PAGES_PATH, BUILD_ACT, 'index.html')};
  if(isDev){
    entrys['mock']=path.resolve(PAGES_PATH, 'mock', 'index.html');
  }
  return entrys;
};


// https://vitejs.dev/config/
export default defineConfig(({command,mode,ssrBuild})=>{
  let emptyOutDir=false;
  console.log("mode===",mode);
  console.log("env==",process.env.CDN_PATH);
  let isDev=mode==='development';
  if(!isDev){
    //清空打包目录
    emptyOutDir=true;
  }
  return {
    root:"./src/activitys",
    clearScreen:false,
    base:process.env.CDN_PATH,
    cacheDir: path.resolve(__dirname, '.vite-cache'),
    build:{
      outDir:path.resolve(__dirname, 'dist'),
      emptyOutDir:emptyOutDir,
      // 小于此阈值的导入或引用资源将内联为 base64 编码， 以避免额外的http请求， 设置为 0, 可以完全禁用此项，
      assetsInlineLimit: 4096,
      // 启动 / 禁用 CSS 代码拆分
      cssCodeSplit: true,
      // 构建后是否生成 soutrce map 文件
      sourcemap: false,
      // 自定义底层的 Rollup 打包配置
      rollupOptions: {
        input: {
          ...getEntries(isDev)
        },
        output:{
          entryFileNames:()=>{
            if(isDev){
              return 'entry-[name].js';
            }
            return `${BUILD_ACT}/[name].js`;
          },
          chunkFileNames: ()=>{
            if(isDev){
              return 'js/[name].js';
            }
            return `${BUILD_ACT}/js/[name]-[hash].js`;
            
          },
          assetFileNames: (chunkInfo)=>{
            let folder='[ext]';
            if (chunkInfo.name) {
              const [name, ext] = path.basename(chunkInfo.name).split('.');
              if(ext.match(/(png|jpg|gif|webp|svg|jpeg)$/i)){
                folder="images";
              }else if(ext.match(/(woff|woff2|eot|ttf|otf)$/i)){
                folder="fonts";
              }
            }

            if(isDev){
              return `${folder}/[name]-[hash].[ext]`;
            }
            return `${BUILD_ACT}/${folder}/[name]-[hash].[ext]`;
            
          }
        },
      },
  
    },
    plugins: [preact()],
    envDir: path.resolve(__dirname, './env'),
    resolve: { 
      alias: {
        '@':path.resolve(__dirname, "src"),
        '@images':path.resolve(__dirname, "src/assets/images"),
        '@assets':path.resolve(__dirname, "src/assets"),
      } 
    }, 
    define:{
      __ACTIVITIE_PATH__:JSON.stringify(getActivitiesDefine())
    },
    css:{
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/assets/styles/variables.scss';` // 引入全局变量文件
        }
      },
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
            grid: true,
          }),
          postcssFlexbugsFixes,
          postCssPxToRem({
            // 自适应，px>rem转换
            rootValue: 100, 
            unitPrecision: 5,
            minPixelValue: 2, // 设置要替换的最小像素值// 75表示750设计稿，37.5表示375设计稿
            propWhiteList: ['*'], // 需要转换的属性，这里选择全部都进行转换
            selectorBlackList: ['norem','.ig-'], // 过滤掉norem-开头的class，不进行rem转换
          }),
        ],
      }
    },
    server: {
      host: 'localhost',        // 指定服务器应该监听哪个 IP 地址
      port: 8080,               // 端口
      strictPort: false, // 若端口已被占用,尝试下移一格端口
      open: "/mock/index.html",   
      proxy: {                
        // '/gateway': {
        //   target: process.env.VITE_API_URL || 'https://pinzhi.didichuxing.com',
        //   ws: true,
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/api/, ''),
        // },
      },
    },
  };
})
