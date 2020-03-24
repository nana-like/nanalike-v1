var wrap = document.querySelector(".wrap");
var header = document.querySelector(".header__inner"),
  headerLogo = header.querySelector(".js-header-logo");
var modal = document.querySelector(".modal"),
  btnModalClose = modal.querySelector(".btn-modal-close"),
  modalDim = modal.querySelector(".modal__dim"),
  modalContent = modal.querySelector(".modal__content");

// 💪
var setModalHeight = function() {
  var winH = window.innerHeight; //윈도 높이
  console.log(winH);
  modalContent.style.height = (winH * 80) / 100 + "px";
};

// 💪 해당 브라우저의 스크롤바 너비를 구하는 함수
var getScrollBarWidth = function() {
  document.body.style.overflow = "hidden";
  var width = document.body.clientWidth;
  document.body.style.overflow = "scroll";
  width -= document.body.clientWidth;
  if (!width) width = document.body.offsetWidth - document.body.clientWidth;
  document.body.style.overflow = "";
  return width;
};

// 💪 스크롤을 막는 함수
var preventScroll = function(type) {
  var body = document.body;
  var paddingR = getScrollBarWidth();

  // 스크롤바가 생길 만큼 길지 않은 경우, 이 이벤트를 무시
  if (body.scrollHeight <= body.clientHeight) {
    return false;
  }

  // 스크롤을 막는 클래스네임을 body에 추가
  document.body.classList.add("scroll-disabled");

  // 💪 사라진 스크롤바 만큼의 패딩값을 추가해 주는 함수
  // .scroll-disabled가 추가되면 윈도우의 브라우저에서는 스크롤바가 사라지기 때문에 페이지 밀림 현상이 발생하는데, 이를 막아주기 위함 (모바일, 맥에서는 스크롤바가 보통 숨김 상태라 무관)

  function getPadding() {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i].style.paddingRight = paddingR + "px";
    }
  }

  getPadding(wrap);
  getPadding(header);
  wrap.style.backgroundColor = "#ffffff";
  // header.style.paddingRight = 75 + "px";
};

// 💪 스크롤을 허용하는 함수
var allowScroll = function() {
  wrap.style.paddingRight = 0;
  header.style.paddingRight = 0 + "px";
  wrap.style.backgroundColor = "";
  document.body.classList.remove("scroll-disabled");
};

// 💪 모달 여닫는 함수
var modalEvt = {
  open: function(e) {
    e.preventDefault();
    preventScroll();
    setModalHeight();
    modal.classList.add("modal--opened");
  },
  close: function() {
    allowScroll();
    modal.classList.remove("modal--opened");
  }
};

btnModalClose.addEventListener("click", modalEvt.close);
// 👆 닫기 버튼 클릭 시 모달을 닫습니다.
modalDim.addEventListener("click", modalEvt.close);
window.addEventListener("resize", setModalHeight);
// 👆 딤(검정 배경) 클릭 시 모달을 닫습니다.

// !! 🤓
var btnPopup = document.querySelector(".js-open-popup");
btnPopup.addEventListener("click", modalEvt.open);

headerLogo.addEventListener("click", function(e) {
  e.preventDefault();
  controller.scrollTo(0);
});
