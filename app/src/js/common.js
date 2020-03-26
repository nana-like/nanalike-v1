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
