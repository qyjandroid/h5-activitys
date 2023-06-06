
export interface ExtraInitData {
    uid?: number;
    token?: string;
    [key: string]: any;
}

export interface MessageData {
    type: string;
    value?: any;
    _actFlag?: string;
    _msgOrigin?: string;
}
export interface ExtraHandler {
    (msg: MessageData, data: ExtraInitData, environment: string): boolean;
}

const defaultHandler = () => true;

export function log(...args: any[]) {
    console.log('%c Mock-HOST::', 'color:blue', ...args);
}


export default function defaultMock(_ifrWindow: Window, environment: string, extraData: ExtraInitData, extraHandler: ExtraHandler = defaultHandler) {
    log('defaultMock：loaded');
    const { ...other } = extraData;
    const initData = {
        type: 'init',
        value: { ...other },
    };

    return function(){
         // 是否执行后续的的操作
         const doNextHandler = extraHandler({type:"get",value:"1"}, initData, environment);
         if (!doNextHandler) {
             return;
         }
        console.log("执行")
    }
}