import *  as fn1Page from "./fn";
import  * as fn2Page  from "./fn1";

export function exportDirectly(){
    return ''
}
function indexFnWrapperExport() {
    return true
}
export { fn1Page, fn2Page,indexFnWrapperExport as indexFn };