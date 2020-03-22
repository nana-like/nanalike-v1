// 💪 유동적으로 높이 조정
var visualEl = document.querySelector("#visual");
var scrollDownEl = document.querySelector(".js-scroll-down");
var changeHeight = function() {
  var winH = window.innerHeight; //윈도 높이
  // visualEl.style.height = winH + "px";

  scrollDownEl.style.top = winH - 30 + "px";
};

// window.addEventListener("load", function() {
//   changeHeight();
// });

// window.addEventListener("resize", function() {
//   changeHeight();
// });

///////////////////

var isMobile = (function(a) {
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      a
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      a.substr(0, 4)
    )
  );
})(navigator.userAgent || navigator.vendor || window.opera);

console.log("=== scrollAnimation.js ===");

var controller = new ScrollMagic.Controller();

var header_mail_tween = TweenMax.to(".js-mail-address", 0.5, {
  scale: 0.9,
  rotation: 90,
  y: 102,
  // x: 80,
  alpha: 0.7
});

var header_title_tween = TweenMax.to(".js-header-title", 0.5, {
  x: "-100%",
  alpha: 0
});

var header_logo_tween = TweenMax.from(".js-header-logo", 0.5, {
  x: "-100%",
  alpha: 0
});

var header_scroll_tween = TweenMax.to(".js-scroll-down", 0.5, {
  alpha: 0
});

var headerScene = new ScrollMagic.Scene({
  triggerHook: 0,
  duration: "30%"
})
  .setTween([
    header_mail_tween,
    header_title_tween,
    header_logo_tween,
    header_scroll_tween
  ])
  .addTo(controller)
  .addIndicators({
    name: "HEADER"
  });

var visualFadeTween = TweenMax.to(".js-visual-back", 0.8, { alpha: 0 });
var visualFadeTween2 = new TimelineMax()
  .to(".js-visual-content", 1, {
    alpha: 0,
    delay: 0.4,
    scale: 0.7
  })
  .to(".js-visual-hello", 0.8, {
    y: -120,
    alpha: 1
  })
  .to(".js-visual-hello", 1, {
    alpha: 0,
    delay: 1
  });

var visualScene1 = new ScrollMagic.Scene({
  triggerHook: 0,
  duration: "115%"
})
  .setTween([visualFadeTween, visualFadeTween2])
  .addTo(controller)
  .addIndicators({
    name: "1"
  });

var visualCont = document.querySelector("#visual");

var visualScene2 = new ScrollMagic.Scene({
  triggerHook: 0,
  duration: "80%"
})
  .setPin("#visual")
  .addTo(controller)
  .addIndicators({
    name: "2"
  })
  .on("end", function(e) {
    console.log("끝!");
    visualCont.classList.add("fixed");
  });

var aboutTween = TweenMax.from("#profile", 1, {
  y: "50%"
});

var aboutTween2 = TweenMax.from(
  ".section-connect-1 .section-connect__word",
  1,
  {
    y: "-100%",
    alpha: 0,
    ease: Linear.easeNone
  }
);

if (!isMobile) {
  new ScrollMagic.Scene({
    triggerElement: "#trigger-2",
    duration: "100%",
    offset: "-200%"
  })
    .setTween([aboutTween])
    .addIndicators({
      name: "인디케이터"
    })
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: ".work",
    duration: "30%",
    offset: "-150%"
  })
    .setTween(aboutTween2)
    .addIndicators()
    .addTo(controller);
}

var tweenStagger = TweenMax.staggerFromTo(
  ".project-list__item",
  1,
  {
    y: "100px"
  },
  {
    y: 0
  },
  0.3
);

var tweenWords = new TimelineMax()
  .from(".js-proWord-1", 0.8, {
    x: "70px"
  })
  .from(".js-proWord-2", 0.8, {
    x: "90px"
  })
  .from(".js-proWord-3", 0.8, {
    x: "110px"
  });

var sceneProject = new ScrollMagic.Scene({
  triggerElement: ".project",
  duration: "80%",
  offset: "-10%"
})
  .setTween([tweenStagger, tweenWords])
  .addTo(controller)
  .addIndicators({
    name: "1"
  });

// we'd only like to use iScroll for mobile...
if (isMobile) {
  // configure iScroll
  var myScroll = new IScroll("#example-wrapper", {
    // don't scroll horizontal
    scrollX: false,
    // but do scroll vertical
    scrollY: true,
    // show scrollbars
    scrollbars: true,
    // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
    // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
    useTransform: false,
    // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
    useTransition: false,
    // set to highest probing level to get scroll events even during momentum and bounce
    // requires inclusion of iscroll-probe.js
    probeType: 3,
    // pass through clicks inside scroll container
    click: true
  });

  // overwrite scroll position calculation to use child's offset instead of container's scrollTop();
  // controller.scrollPos(function() {
  //   return -myScroll.y;
  // });

  // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
  // myScroll.on("scroll", function() {
  //   controller.update(true);
  // });

  // add indicators to scrollcontent so they will be moved with it.
  // scene.addIndicators({ parent: ".scrollContent" });
} else {
  // add indicators (requires plugin)
  // scene.addIndicators();
}

// var fixed = document.querySelector(".fixed");
// fixed.addEventListener("DOMMouseScroll", function() {
//   var wrap = document.querySelector(".wrap");
//   var wrapScroll = wrap.scrollTop;
//   wrap.scrollTop =
//     wrapScroll -
//     (event.originalEvent.wheelDelta || event.originalEvent.detail * 30);
// });
