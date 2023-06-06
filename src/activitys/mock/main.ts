import "./index.css";
import {getQueryString} from "../../utils/index";
const actName = getQueryString('act');

const env = getQueryString('env') || 'test';

function addActivity(){
    const activityList = __ACTIVITIE_PATH__ as any;
    const el = document.querySelector("#activityList") as any;
    const htmlStr = activityList
        .map((act: string) => {
            if (act.trim() === "" || act === "mock") {
                return "";
            }
            return (
                `<li>
                <a href= "../` +
                act +
                `/index.html">` +
                act +
                `</a>
                
                <a target="_blank" href="./index.html?act=` +
                act+`">mock</a></li>`
            );
        })
        .filter((a: any) => !!a)
        .join("");
    el.innerHTML = htmlStr;
    el.style.display = 'block';
    // window.location.href = "./index.html?act="+activityList[0];
}

if(!actName){
    addActivity();
}


function createIframe(act: string): HTMLIFrameElement {
    const qs = window.location.search;

    const ifr = document.createElement('iframe') as HTMLIFrameElement;
    ifr.src = `/${act}/index.html${qs}&platformType=PC&deviceType=PC`;

    return ifr;
}
function infoLog(...messages: string[]) {
    console.log(`%c ${messages.join(' ')}`, `color:blue;`);
}

function successLog(...messages: string[]) {
    console.log(`%c ${messages.join(' ')}`, `color:green;`);
}


function loadMockScript(act: string): Promise<any> {
    infoLog(`mock: 准备加载mock脚本${act}`);
    const modules = import.meta.glob(`./mocks/*.ts`);
    console.log("modules===",modules)
    const modulesPath=`./mocks/${act}.ts`
    return new Promise(resolve => {
        if(modules[modulesPath]){
            modules[modulesPath]()
            .then((mock:any) => {
                if (!mock.default) {
                    return window.alert('mock: mock脚本没有默认导出');
                }
                successLog(`mock: 加载mock脚本${act}成功`);
                return resolve(mock.default);
            })
            .catch(err => {
                console.error('mock：err==', err);
                // window.alert("mock:加载发生错误,", err.message);
                return err;
            });
        }else{
            infoLog(`mock:加载mock脚本${act}失败，尝试加载默认mock脚本`);
            return modules[`./mocks/__default__.ts`]().then((mock:any) => {
                if (!mock.default) {
                    // eslint-disable-next-line no-alert
                    return window.alert('mock: 默认mock脚本没有默认导出');
                }
                successLog(`mock:默认mock脚本成功`);
                return resolve(mock.default);
            }).catch((err)=>{
                console.error('mock: 加载默认mock脚本失败', err);
            })
        }
       
    });
}



(async function init() {
    try {
        if (!actName) {
            return window.alert('mock：缺少必要参数act');
        }
        console.log("==actName===",actName)

        // 创建iframe
        const ifr = createIframe(actName);

        // 加载mock脚本
         const mockEntry: any = await loadMockScript(actName);;

        document.body.appendChild(ifr);

        if (typeof mockEntry !== 'function') {
            return window.alert('mock脚本加载失败');
        }

        document.body.appendChild(ifr);

        // const pcMock = getPCMockBridge(ifr.contentWindow);

        const initData={};
        mockEntry(ifr.contentWindow, env, initData);

        // 初始化Mock脚本
        if (window.location.search.indexOf('&init') >= 0) {
            // 加载完毕，主动发送init
            ifr.onload = () => {
                // pcMock.postMessage({
                //     type: 'init',
                //     value: initData,
                // });
            };
            return;
        }
    } catch (err) {
        console.log('mock初始哈失败：', err);
    }
})();