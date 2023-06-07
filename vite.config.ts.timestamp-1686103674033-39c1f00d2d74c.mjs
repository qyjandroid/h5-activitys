// vite.config.ts
import { defineConfig } from "file:///E:/h5-activitys/node_modules/vite/dist/node/index.js";
import * as path from "path";
import postCssPxToRem from "file:///E:/h5-activitys/node_modules/postcss-pxtorem/index.js";
import autoprefixer from "file:///E:/h5-activitys/node_modules/autoprefixer/lib/autoprefixer.js";
import postcssFlexbugsFixes from "file:///E:/h5-activitys/node_modules/postcss-flexbugs-fixes/index.js";
import preact from "file:///E:/h5-activitys/node_modules/@preact/preset-vite/dist/esm/index.mjs";
var __vite_injected_original_dirname = "E:\\h5-activitys";
var { NODE_ENV = "", BUILD_ACT = "" } = process.env;
var PAGES_PATH = path.resolve(process.cwd(), "src/activitys");
var getActivitiesDefine = function getActivitiesDefine2() {
  const activities = [];
  return [BUILD_ACT];
};
var getEntries = function findEntries(isDev) {
  console.log("entry===", path.resolve(PAGES_PATH, BUILD_ACT, "index.html"));
  let entrys = { [`${BUILD_ACT}`]: path.resolve(PAGES_PATH, BUILD_ACT, "index.html") };
  if (isDev) {
    entrys["mock"] = path.resolve(PAGES_PATH, "mock", "index.html");
  }
  return entrys;
};
var vite_config_default = defineConfig(({ command, mode, ssrBuild }) => {
  let emptyOutDir = false;
  console.log("mode===", mode);
  let isDev = mode === "development";
  if (!isDev) {
    emptyOutDir = true;
  }
  return {
    root: "./src/activitys",
    clearScreen: false,
    base: "/",
    cacheDir: path.resolve(__vite_injected_original_dirname, ".vite-cache"),
    build: {
      outDir: path.resolve(__vite_injected_original_dirname, "dist"),
      emptyOutDir,
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
        output: {
          entryFileNames: () => {
            if (isDev) {
              return "assets/entry-[name].js";
            }
            return `${BUILD_ACT}/[name].js`;
          },
          chunkFileNames: () => {
            if (isDev) {
              return "assets/js/[name].js";
            }
            return `${BUILD_ACT}/js/[name]-[hash].js`;
          },
          assetFileNames: (chunkInfo) => {
            let folder = "[ext]";
            if (chunkInfo.name) {
              const [name, ext] = path.basename(chunkInfo.name).split(".");
              if (ext.match(/(png|jpg|gif|webp|svg|jpeg)$/i)) {
                folder = "images";
              } else if (ext.match(/(woff|woff2|eot|ttf|otf)$/i)) {
                folder = "fonts";
              }
            }
            if (isDev) {
              return `assets/${folder}/[name]-[hash].[ext]`;
            }
            return `${BUILD_ACT}/assets/[${folder}/[name]-[hash].[ext]`;
          }
        }
      }
    },
    plugins: [preact()],
    // envDir: path.resolve(__dirname, './env')
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "src"),
        "@images": path.resolve(__vite_injected_original_dirname, "src/assets/images"),
        "@assets": path.resolve(__vite_injected_original_dirname, "src/assets")
      }
    },
    define: {
      __ACTIVITIE_PATH__: JSON.stringify(getActivitiesDefine())
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/assets/styles/variables.scss';`
          // 引入全局变量文件
        }
      },
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 8"],
            grid: true
          }),
          postcssFlexbugsFixes,
          postCssPxToRem({
            // 自适应，px>rem转换
            rootValue: 100,
            unitPrecision: 5,
            minPixelValue: 2,
            // 设置要替换的最小像素值// 75表示750设计稿，37.5表示375设计稿
            propWhiteList: ["*"],
            // 需要转换的属性，这里选择全部都进行转换
            selectorBlackList: ["norem", ".ig-"]
            // 过滤掉norem-开头的class，不进行rem转换
          })
        ]
      }
    },
    server: {
      host: "localhost",
      // 指定服务器应该监听哪个 IP 地址
      port: 8080,
      // 端口
      strictPort: false,
      // 若端口已被占用,尝试下移一格端口
      open: "/mock/index.html",
      proxy: {
        // '/gateway': {
        //   target: process.env.VITE_API_URL || 'https://pinzhi.didichuxing.com',
        //   ws: true,
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/api/, ''),
        // },
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxoNS1hY3Rpdml0eXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGg1LWFjdGl2aXR5c1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovaDUtYWN0aXZpdHlzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcG9zdENzc1B4VG9SZW0gZnJvbSAncG9zdGNzcy1weHRvcmVtJ1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInO1xuaW1wb3J0IHBvc3Rjc3NGbGV4YnVnc0ZpeGVzIGZyb20gJ3Bvc3Rjc3MtZmxleGJ1Z3MtZml4ZXMnO1xuXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcHJlYWN0IGZyb20gJ0BwcmVhY3QvcHJlc2V0LXZpdGUnO1xuXG5sZXQgeyBOT0RFX0VOViA9ICcnLCBCVUlMRF9BQ1QgPSAnJyB9ID0gcHJvY2Vzcy5lbnY7XG5cblxuXG5cblxuLy8gXHU2RDNCXHU1MkE4XHU3NkVFXHU1RjU1XG5jb25zdCBQQUdFU19QQVRIID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYWN0aXZpdHlzJyk7XG5cblxuY29uc3QgZ2V0QWN0aXZpdGllc0RlZmluZSA9IGZ1bmN0aW9uIGdldEFjdGl2aXRpZXNEZWZpbmUoKSB7XG4gIGNvbnN0IGFjdGl2aXRpZXMgPSBbXTtcbiAgcmV0dXJuIFtCVUlMRF9BQ1RdO1xuICAvLyBCVUlMRF9ESVJTLmZvckVhY2goZGlyID0+IHtcbiAgLy8gICAgIGxldCBmaWxlVXJsID0gcGF0aC5yZXNvbHZlKFBBR0VTX1BBVEgsIGRpciwgJ2luZGV4Lmh0bWwnKTtcbiAgICAgIFxuICAvLyAgICAgaWYgKGZzLmV4aXN0c1N5bmMoZmlsZVVybCkpIHtcbiAgLy8gICAgICAgICBhY3Rpdml0aWVzLnB1c2goZGlyKTtcbiAgLy8gICAgIH1cbiAgLy8gfSk7XG4gIC8vIHJldHVybiBhY3Rpdml0aWVzO1xufTtcblxuXG5jb25zdCBnZXRFbnRyaWVzID0gZnVuY3Rpb24gZmluZEVudHJpZXMoaXNEZXYpIHtcbiAgY29uc29sZS5sb2coXCJlbnRyeT09PVwiLHBhdGgucmVzb2x2ZShQQUdFU19QQVRILCBCVUlMRF9BQ1QsICdpbmRleC5odG1sJykpO1xuICBsZXQgZW50cnlzPXsgW2Ake0JVSUxEX0FDVH1gXTogcGF0aC5yZXNvbHZlKFBBR0VTX1BBVEgsIEJVSUxEX0FDVCwgJ2luZGV4Lmh0bWwnKX07XG4gIGlmKGlzRGV2KXtcbiAgICBlbnRyeXNbJ21vY2snXT1wYXRoLnJlc29sdmUoUEFHRVNfUEFUSCwgJ21vY2snLCAnaW5kZXguaHRtbCcpO1xuICB9XG4gIHJldHVybiBlbnRyeXM7XG59O1xuXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHtjb21tYW5kLG1vZGUsc3NyQnVpbGR9KT0+e1xuICBsZXQgZW1wdHlPdXREaXI9ZmFsc2U7XG4gIGNvbnNvbGUubG9nKFwibW9kZT09PVwiLG1vZGUpO1xuICBsZXQgaXNEZXY9bW9kZT09PSdkZXZlbG9wbWVudCc7XG4gIGlmKCFpc0Rldil7XG4gICAgLy9cdTZFMDVcdTdBN0FcdTYyNTNcdTUzMDVcdTc2RUVcdTVGNTVcbiAgICBlbXB0eU91dERpcj10cnVlO1xuICB9XG4gIHJldHVybiB7XG4gICAgcm9vdDpcIi4vc3JjL2FjdGl2aXR5c1wiLFxuICAgIGNsZWFyU2NyZWVuOmZhbHNlLFxuICAgIGJhc2U6XCIvXCIsXG4gICAgY2FjaGVEaXI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcudml0ZS1jYWNoZScpLFxuICAgIGJ1aWxkOntcbiAgICAgIG91dERpcjpwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnZGlzdCcpLFxuICAgICAgZW1wdHlPdXREaXI6ZW1wdHlPdXREaXIsXG4gICAgICAvLyBcdTVDMEZcdTRFOEVcdTZCNjRcdTk2MDhcdTUwM0NcdTc2ODRcdTVCRkNcdTUxNjVcdTYyMTZcdTVGMTVcdTc1MjhcdThENDRcdTZFOTBcdTVDMDZcdTUxODVcdTgwNTRcdTRFM0EgYmFzZTY0IFx1N0YxNlx1NzgwMVx1RkYwQyBcdTRFRTVcdTkwN0ZcdTUxNERcdTk4OURcdTU5MTZcdTc2ODRodHRwXHU4QkY3XHU2QzQyXHVGRjBDIFx1OEJCRVx1N0Y2RVx1NEUzQSAwLCBcdTUzRUZcdTRFRTVcdTVCOENcdTUxNjhcdTc5ODFcdTc1MjhcdTZCNjRcdTk4NzlcdUZGMENcbiAgICAgIGFzc2V0c0lubGluZUxpbWl0OiA0MDk2LFxuICAgICAgLy8gXHU1NDJGXHU1MkE4IC8gXHU3OTgxXHU3NTI4IENTUyBcdTRFRTNcdTc4MDFcdTYyQzZcdTUyMDZcbiAgICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICAgIC8vIFx1Njc4NFx1NUVGQVx1NTQwRVx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMCBzb3V0cmNlIG1hcCBcdTY1ODdcdTRFRjZcbiAgICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTVFOTVcdTVDNDJcdTc2ODQgUm9sbHVwIFx1NjI1M1x1NTMwNVx1OTE0RFx1N0Y2RVxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIC4uLmdldEVudHJpZXMoaXNEZXYpXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dDp7XG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6KCk9PntcbiAgICAgICAgICAgIGlmKGlzRGV2KXtcbiAgICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvZW50cnktW25hbWVdLmpzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgJHtCVUlMRF9BQ1R9L1tuYW1lXS5qc2A7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogKCk9PntcbiAgICAgICAgICAgIGlmKGlzRGV2KXtcbiAgICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvanMvW25hbWVdLmpzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgJHtCVUlMRF9BQ1R9L2pzL1tuYW1lXS1baGFzaF0uanNgO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogKGNodW5rSW5mbyk9PntcbiAgICAgICAgICAgIGxldCBmb2xkZXI9J1tleHRdJztcbiAgICAgICAgICAgIGlmIChjaHVua0luZm8ubmFtZSkge1xuICAgICAgICAgICAgICBjb25zdCBbbmFtZSwgZXh0XSA9IHBhdGguYmFzZW5hbWUoY2h1bmtJbmZvLm5hbWUpLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgIGlmKGV4dC5tYXRjaCgvKHBuZ3xqcGd8Z2lmfHdlYnB8c3ZnfGpwZWcpJC9pKSl7XG4gICAgICAgICAgICAgICAgZm9sZGVyPVwiaW1hZ2VzXCI7XG4gICAgICAgICAgICAgIH1lbHNlIGlmKGV4dC5tYXRjaCgvKHdvZmZ8d29mZjJ8ZW90fHR0ZnxvdGYpJC9pKSl7XG4gICAgICAgICAgICAgICAgZm9sZGVyPVwiZm9udHNcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihpc0Rldil7XG4gICAgICAgICAgICAgIHJldHVybiBgYXNzZXRzLyR7Zm9sZGVyfS9bbmFtZV0tW2hhc2hdLltleHRdYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgJHtCVUlMRF9BQ1R9L2Fzc2V0cy9bJHtmb2xkZXJ9L1tuYW1lXS1baGFzaF0uW2V4dF1gO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbcHJlYWN0KCldLFxuICAgIC8vIGVudkRpcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vZW52JylcbiAgICByZXNvbHZlOiB7IFxuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOnBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxuICAgICAgICAnQGltYWdlcyc6cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvYXNzZXRzL2ltYWdlc1wiKSxcbiAgICAgICAgJ0Bhc3NldHMnOnBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2Fzc2V0c1wiKSxcbiAgICAgIH0gXG4gICAgfSwgXG4gICAgZGVmaW5lOntcbiAgICAgIF9fQUNUSVZJVElFX1BBVEhfXzpKU09OLnN0cmluZ2lmeShnZXRBY3Rpdml0aWVzRGVmaW5lKCkpXG4gICAgfSxcbiAgICBjc3M6e1xuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0ICdAL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO2AgLy8gXHU1RjE1XHU1MTY1XHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHU2NTg3XHU0RUY2XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwb3N0Y3NzOiB7XG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICBhdXRvcHJlZml4ZXIoe1xuICAgICAgICAgICAgb3ZlcnJpZGVCcm93c2Vyc2xpc3Q6IFsnQW5kcm9pZCA0LjEnLCAnaU9TIDcuMScsICdDaHJvbWUgPiAzMScsICdmZiA+IDMxJywgJ2llID49IDgnXSxcbiAgICAgICAgICAgIGdyaWQ6IHRydWUsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcG9zdGNzc0ZsZXhidWdzRml4ZXMsXG4gICAgICAgICAgcG9zdENzc1B4VG9SZW0oe1xuICAgICAgICAgICAgLy8gXHU4MUVBXHU5MDAyXHU1RTk0XHVGRjBDcHg+cmVtXHU4RjZDXHU2MzYyXG4gICAgICAgICAgICByb290VmFsdWU6IDEwMCwgXG4gICAgICAgICAgICB1bml0UHJlY2lzaW9uOiA1LFxuICAgICAgICAgICAgbWluUGl4ZWxWYWx1ZTogMiwgLy8gXHU4QkJFXHU3RjZFXHU4OTgxXHU2NkZGXHU2MzYyXHU3Njg0XHU2NzAwXHU1QzBGXHU1MENGXHU3RDIwXHU1MDNDLy8gNzVcdTg4NjhcdTc5M0E3NTBcdThCQkVcdThCQTFcdTdBM0ZcdUZGMEMzNy41XHU4ODY4XHU3OTNBMzc1XHU4QkJFXHU4QkExXHU3QTNGXG4gICAgICAgICAgICBwcm9wV2hpdGVMaXN0OiBbJyonXSwgLy8gXHU5NzAwXHU4OTgxXHU4RjZDXHU2MzYyXHU3Njg0XHU1QzVFXHU2MDI3XHVGRjBDXHU4RkQ5XHU5MUNDXHU5MDA5XHU2MkU5XHU1MTY4XHU5MEU4XHU5MEZEXHU4RkRCXHU4ODRDXHU4RjZDXHU2MzYyXG4gICAgICAgICAgICBzZWxlY3RvckJsYWNrTGlzdDogWydub3JlbScsJy5pZy0nXSwgLy8gXHU4RkM3XHU2RUU0XHU2Mzg5bm9yZW0tXHU1RjAwXHU1OTM0XHU3Njg0Y2xhc3NcdUZGMENcdTRFMERcdThGREJcdTg4NENyZW1cdThGNkNcdTYzNjJcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsICAgICAgICAvLyBcdTYzMDdcdTVCOUFcdTY3MERcdTUyQTFcdTU2NjhcdTVFOTRcdThCRTVcdTc2RDFcdTU0MkNcdTU0RUFcdTRFMkEgSVAgXHU1NzMwXHU1NzQwXG4gICAgICBwb3J0OiA4MDgwLCAgICAgICAgICAgICAgIC8vIFx1N0FFRlx1NTNFM1xuICAgICAgc3RyaWN0UG9ydDogZmFsc2UsIC8vIFx1ODJFNVx1N0FFRlx1NTNFM1x1NURGMlx1ODhBQlx1NTM2MFx1NzUyOCxcdTVDMURcdThCRDVcdTRFMEJcdTc5RkJcdTRFMDBcdTY4M0NcdTdBRUZcdTUzRTNcbiAgICAgIG9wZW46IFwiL21vY2svaW5kZXguaHRtbFwiLCAgIFxuICAgICAgcHJveHk6IHsgICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICcvZ2F0ZXdheSc6IHtcbiAgICAgICAgLy8gICB0YXJnZXQ6IHByb2Nlc3MuZW52LlZJVEVfQVBJX1VSTCB8fCAnaHR0cHM6Ly9waW56aGkuZGlkaWNodXhpbmcuY29tJyxcbiAgICAgICAgLy8gICB3czogdHJ1ZSxcbiAgICAgICAgLy8gICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIC8vICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcbiAgICAgICAgLy8gfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1PLFNBQVMsb0JBQW9CO0FBQ2hRLFlBQVksVUFBVTtBQUN0QixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLDBCQUEwQjtBQUdqQyxPQUFPLFlBQVk7QUFQbkIsSUFBTSxtQ0FBbUM7QUFTekMsSUFBSSxFQUFFLFdBQVcsSUFBSSxZQUFZLEdBQUcsSUFBSSxRQUFRO0FBT2hELElBQU0sYUFBa0IsYUFBUSxRQUFRLElBQUksR0FBRyxlQUFlO0FBRzlELElBQU0sc0JBQXNCLFNBQVNBLHVCQUFzQjtBQUN6RCxRQUFNLGFBQWEsQ0FBQztBQUNwQixTQUFPLENBQUMsU0FBUztBQVNuQjtBQUdBLElBQU0sYUFBYSxTQUFTLFlBQVksT0FBTztBQUM3QyxVQUFRLElBQUksWUFBZ0IsYUFBUSxZQUFZLFdBQVcsWUFBWSxDQUFDO0FBQ3hFLE1BQUksU0FBTyxFQUFFLENBQUMsR0FBRyxXQUFXLEdBQVEsYUFBUSxZQUFZLFdBQVcsWUFBWSxFQUFDO0FBQ2hGLE1BQUcsT0FBTTtBQUNQLFdBQU8sTUFBTSxJQUFP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
