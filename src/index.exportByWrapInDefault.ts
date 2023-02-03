// export  *   from "./fn";
// export * from "./fn1";
export * from "./fn1Namespace"
import  * as fn1Namespace from "./fn1Namespace"
export default { ...fn1Namespace };
// import *  as fn1Page from "./fn";
// import  * as fn2Page  from "./fn1";

// // export function exportDirectly(){
// //     return ''
// // }
// //   function exportByWrap() {
// //     return ''
// // }
// // export { exportByWrap };
// // function exportByWrapInDefault() {
// //     return true
// // }
// // export default { fn1Page,...fn1Page, fn2Page , exportByWrapInDefault};
// export default {
//     ...fn1Page,
//     ...fn2Page,
// }