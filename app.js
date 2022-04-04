// function doA(ms) {
//     let startDate = new Date().getTime();
//     let endDate = startDate;

//     // Await timer
//     while(endDate < startDate + ms) {
//         endDate = new Date().getTime();
//     }
// }

// function doB(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     });
// }

// const controller = async () => {
//     const timeRun = Date.now();
//     doA(3000);
//     await doB(1000);
//     console.log(new Date().getTime() - timeRun);
// };
// async () => {
//     await controller();
//     await controller();
//     await controller();
// }

// bai 10
// async function waitAndMaybeReject() {
//     // wait 1 giây
//     await new Promise((r) => setTimeout(r, 1000));
  
//     const isHeads = Boolean(Math.round(Math.random()));
  
//     if (isHeads) return "Thành công zòi";
//     throw Error("Xui thôi!");
//   }
// //    async function test() {
// //     return await waitAndMaybeReject();
// //   }
//   async function test() {
//     try {
//         console.log("Sssssssssssssssssss");
//        return await waitAndMaybeReject();
//     } catch (e) {
//       return "Oh No!";
//     }
//   }
// test();		

//bai 8
const a = () => {console.log('a'); }
const b = () => {console.log('b'); }
const c = () => {console.log('c'); }
const d = () => {console.log('d'); }
const main = () => {
    setImmediate(d);
    setImmediate(b);
    process.nextTick(a);
    process.nextTick(c);
}
main();