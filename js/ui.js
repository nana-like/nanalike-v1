var wrap = document.querySelector(".wrap");
var header = document.querySelector(".header__inner"),
  headerLogo = header.querySelector(".js-header-logo");
var btnPopup = document.querySelector(".js-open-popup");
var modal = document.querySelector(".modal"),
  btnModalClose = modal.querySelector(".btn-modal-close"),
  modalDim = modal.querySelector(".modal__dim"),
  modalContent = modal.querySelector(".modal__content");

// 💪 모달 높이 지정 함수
var setModalHeight = function () {
  var winH = window.innerHeight;
  modalContent.style.height = (winH * 80) / 100 + "px";
};

// 💪 해당 브라우저의 스크롤바 너비를 구하는 함수
var getScrollBarWidth = function () {
  document.body.style.overflow = "hidden";
  var width = document.body.clientWidth;
  document.body.style.overflow = "scroll";
  width -= document.body.clientWidth;
  if (!width) width = document.body.offsetWidth - document.body.clientWidth;
  document.body.style.overflow = "";
  return width;
};

// 💪 스크롤을 막는 함수
var preventScroll = function (type) {
  var body = document.body;
  var paddingR = getScrollBarWidth();

  // 스크롤바가 생길 만큼 길지 않은 경우, 이 이벤트를 무시
  if (body.scrollHeight <= body.clientHeight) {
    return false;
  }

  // 스크롤을 막는 클래스네임을 body에 추가
  document.body.classList.add("scroll-disabled");

  // 💪 사라진 스크롤바 만큼의 패딩값을 추가해 주는 함수

  function getPadding() {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i].style.paddingRight = paddingR + "px";
    }
  }

  getPadding(wrap);
  getPadding(header);
  wrap.style.backgroundColor = "#ffffff";
};

// 💪 스크롤을 허용하는 함수
var allowScroll = function () {
  wrap.style.paddingRight = 0;
  header.style.paddingRight = 0 + "px";
  wrap.style.backgroundColor = "";
  document.body.classList.remove("scroll-disabled");
};

// 💪 모달 여닫는 함수
var modalEvt = {
  open: function (e) {
    e.preventDefault();
    preventScroll();
    setModalHeight();
    modal.classList.add("modal--opened");
  },
  close: function () {
    allowScroll();
    modal.classList.remove("modal--opened");
  }
};

var loadingDoneEvt = function () {
  this.setTimeout(function () {
    document.body.classList.remove("loading--ongoing");
    document.body.classList.add("loading--hide");
  }, 800)
  controller.scrollTo(0);
}

var initCommon = function () {
  loadingDoneEvt();
  btnModalClose.addEventListener("click", modalEvt.close);
  modalDim.addEventListener("click", modalEvt.close);
  window.addEventListener("resize", setModalHeight);
  btnPopup.addEventListener("click", modalEvt.open);
  headerLogo.addEventListener("click", function (e) {
    e.preventDefault();
    controller.scrollTo(0);
  });
}


window.addEventListener("load", initCommon);


// 💪 모바일 판단
var isMobile = (function (a) {
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      a
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      a.substr(0, 4)
    )
  );
})(navigator.userAgent || navigator.vendor || window.opera);
var prCont = document.querySelector(".pr__container");


// 💪 컨트롤러 추가
var controller = new ScrollMagic.Controller();

// 💪 트윈 모음
// ===== (1) 헤더 =====
// 헤더 - 메일주소 오른족으로 회전
var header_tween_mail = TweenMax.to(".js-mail-address", 0.5, {
  scale: 0.9,
  rotation: 90,
  y: 102,
  alpha: 0.7
});

// 헤더 - 타이틀 왼쪽으로 사라짐
var header_tween_title = TweenMax.to(".js-header-title", 0.5, {
  x: "-100%",
  alpha: 0
});

// 헤더 - 로고 왼쪽에서 등장함
var header_tween_logo = TweenMax.from(".js-header-logo", 0.5, {
  x: "-100%",
  alpha: 0
});

// ===== (2) 비주얼 =====
// 비주얼 - 스크롤 다운 영역 희미해짐
var visaul_tween_scroll = TweenMax.to(".js-scroll-down", 0.5, {
  alpha: 0
});
// 비주얼 - 배경 희미해짐
var visual_tween_bg = TweenMax.to(".js-visual-back", 0.8, {
  alpha: 0
});
// 비주얼 - 메인 영역 페이드아웃 후 인사말 등장
var visual_tween_main = new TimelineMax()
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

// ===== (3) 어바웃 =====
var about_tween_profile = TweenMax.fromTo(
  ".profile",
  1,
  {
    y: "50%"
  },
  {
    y: "0%"
  }
);

var about_tween_connect = TweenMax.from(
  ".section-connect-1 .section-connect__word",
  1,
  {
    y: "-100%",
    alpha: 0,
    ease: Linear.easeNone
  }
);

// ===== (4) 워크 =====

var project_tween_words = new TimelineMax()
  .from(".js-proWord-1", 0.8, {
    x: "70px"
  })
  .from(".js-proWord-2", 0.8, {
    x: "90px"
  })
  .from(".js-proWord-3", 0.8, {
    x: "110px"
  });

var work_tween_connect = TweenMax.from(
  ".section-connect-2 .section-connect__word",
  1,
  {
    y: "-100%",
    alpha: 0,
    ease: Linear.easeNone
  }
);

// ===== (6) PR =====

var pr_tween_connect = new TimelineMax()
  .from(".section-connect-3 .section-connect__word", 1, {
    y: "-100%",
    alpha: 0,
    ease: Linear.easeNone
  })
  .from(".section-connect-4 .section-connect__word", 1, {
    y: "-100%",
    alpha: 0,
    ease: Linear.easeNone
  });
var pr_tween_scroll = TweenMax.to(".pr__container", 2, {
  x: "-80%",
  ease: Linear.easeNone
});



// 💪 (1) 헤더 씬
var headerScene = new ScrollMagic.Scene({
  triggerHook: 0,
  duration: "30%"
}).setTween([
  header_tween_mail,
  header_tween_title,
  header_tween_logo,
  visaul_tween_scroll
]);

// 💪 (2) 비주얼 - 등장씬
var visualScene = new ScrollMagic.Scene({
  triggerHook: 0,
  duration: "115%"
}).setTween([visual_tween_bg, visual_tween_main]);

// 💪 (3) 비주얼 - 영역 고정씬
var visualCont = document.querySelector("#visual");
var visualPinScene = new ScrollMagic.Scene({
  triggerHook: 0,
  duration: "80%"
})
  .setPin(visualCont)
  .on("end", function (e) {
    visualCont.classList.add("fixed");
  });

// 💪 (4) 어바웃 - 프로필 패럴렉스
var aboutProfileScene = new ScrollMagic.Scene({
  triggerElement: "#trigger-2",
  duration: "70%",
  offset: "-200%"
}).setTween([about_tween_profile]);

// 💪 (5) 어바웃 - 이음말 페이드인
var aboutWordScene = new ScrollMagic.Scene({
  triggerElement: ".work",
  duration: "30%",
  offset: "-150%"
}).setTween(about_tween_connect);

// 💪 (7) Recent 글자 등장
var recentWords = document.querySelectorAll(".recent__background-word");

var recentScene = new ScrollMagic.Scene({
  triggerElement: ".recent",
  offset: 50,
  reverse: false
}).setClassToggle(".recent__background", "ani-recent-show");

// 💪 (8) 워크 - 이음말 페이드인
var workWordScene = new ScrollMagic.Scene({
  triggerElement: ".ability",
  duration: "30%",
  offset: "-100"
})
  .setTween(work_tween_connect)
  .setClassToggle(".icon-hello", "ani-swing");

// 💪 (9) 어빌리티 - 백그라운드 단어 등장
var revealElements = document.getElementsByClassName("ability-list__item");
for (var i = 0; i < revealElements.length; i++) {
  var scene2 = new ScrollMagic.Scene({
    triggerElement: revealElements[i], //각 요소가 트리거가 됨
    reverse: false
  })
    .setClassToggle(revealElements[i], "visible") //해당 요소에 클래스 토글
    .addTo(controller);
}

// 💪 (10) 어빌리티 - 백그라운드 패럴렉스
var abilityWords = document.getElementsByClassName("ability-list__back");
for (var i = 0; i < abilityWords.length; i++) {
  var scene2 = new ScrollMagic.Scene({
    triggerElement: abilityWords[i], //각 요소가 트리거가 됨
    duration: "100%",
    offset: "-200%"
  })
    .setTween(abilityWords[i], { y: "-100%", ease: Linear.easeNone })
    .addTo(controller);
}

// 💪 (11) PR - 이음말
var prWordScene = new ScrollMagic.Scene({
  triggerElement: ".pr",
  duration: "25%",
  offset: "-250%"
}).setTween(pr_tween_connect);
var prScrollScene = new ScrollMagic.Scene({
  triggerElement: ".pr",
  duration: "60%",
  offset: 120
}).setTween(pr_tween_scroll);

var headerLogo = document.querySelector(".js-header-logo");
controller.scrollTo(function (newpos) {
  TweenMax.to(window, 0.5, { scrollTo: { y: newpos } });
});
headerLogo.addEventListener("click", function (e) {
  e.preventDefault();
  controller.scrollTo(0);
});


// 💪 반응형(모바일 사이즈인지) 체크
var isMobileSize = function () {
  var winW = window.innerWidth;
  if (winW < 980) {
    return true;
  } else {
    return false;
  }
}



if (isMobile) {
  // 💪 모바일일 경우의 Scene 관리
  controller.addScene([
    headerScene,
    visualScene,
    visualPinScene,
    aboutProfileScene,
    aboutWordScene,
    workWordScene,
    prWordScene,
  ]);
  prCont.classList.add("isMobile");

} else {
  var project_tween_up = TweenMax.staggerFromTo(
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
  var projectScene = new ScrollMagic.Scene({
    triggerElement: ".project",
    duration: "80%",
    offset: "-10%"
  }).setTween([project_tween_up, project_tween_words]);
  controller.addScene([
    headerScene,
    visualScene,
    visualPinScene,
    aboutProfileScene,
    aboutWordScene,
    projectScene,
    recentScene,
    workWordScene,
    prWordScene,
    prScrollScene
  ]);
}


var windowLoadEvt = function () {


  isMobileSize();
  if (!isMobileSize()) {
    prScrollScene.enabled(true);
  } else {
    prScrollScene.enabled(false);
    prCont.style.transform = "translateX(0%)";
  }

  if (isMobile) {
    prCont.style.transform = "translateX(50%)";
  }
}

var initScroll = function () {
  windowLoadEvt();
}

var resizeEvt = function () {
  windowLoadEvt();
}

window.addEventListener("load", initScroll);
window.addEventListener("resize", resizeEvt);
