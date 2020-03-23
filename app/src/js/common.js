// // we'd only like to use iScroll for mobile...
// if (isMobile) {
//   // configure iScroll
//   var myScroll = new IScroll(".wrap", {
//     // don't scroll horizontal
//     scrollX: false,
//     // but do scroll vertical
//     scrollY: true,
//     // show scrollbars
//     scrollbars: true,
//     // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
//     // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
//     useTransform: false,
//     // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
//     useTransition: false,
//     // set to highest probing level to get scroll events even during momentum and bounce
//     // pass through clicks inside scroll container
//     click: true
//   });

//   // overwrite scroll position calculation to use child's offset instead of container's scrollTop();
//   controller.scrollPos(function() {
//     return -myScroll.y;
//   });

//   // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
//   myScroll.on("scroll", function() {
//     controller.update(true);
//   });

//   // add indicators to scrollcontent so they will be moved with it.
//   sceneProject.addIndicators({ parent: ".project" });
// }

// // var fixed = document.querySelector(".fixed");
// // fixed.addEventListener("DOMMouseScroll", function() {
// //   var wrap = document.querySelector(".wrap");
// //   var wrapScroll = wrap.scrollTop;
// //   wrap.scrollTop =
// //     wrapScroll -
// //     (event.originalEvent.wheelDelta || event.originalEvent.detail * 30);
// // });
