// console.log("팝업연결하기!");

// var btnPopup = document.querySelector(".js-open-popup");

// var clickHandler = function() {
//   modalEvt.show();
// };

// var modal = document.querySelector(".modal");

// var modalEvt = {
//   show: function() {
//     console.log("모달 보여짐");
//     modal.classList.add("modal--opened");
//   },
//   hide: function() {
//     console.log("모달 닫힘");
//   }
// };

// btnPopup.addEventListener("click", clickHandler);

var modal = document.querySelector(".modal");

var btnModalClose = modal.querySelector(".btn-modal-close"),
  btnModalOkay = modal.querySelector(".btn-modal-okay"),
  modalDim = modal.querySelector(".modal__dim");
var modalEvt = {
  open: function(e) {
    e.preventDefault();
    modal.classList.add("modal--opened");
    // 👆 .modal에 .-modal-opened가 붙으면 화면에 보입니다.
  },
  close: function() {
    modal.classList.remove("modal--opened");
  }
};
if (btnModalOkay != null) {
  btnModalOkay.addEventListener("click", modalEvt.close);
  // 👆 확인 버튼 클릭 시 모달을 닫습니다.
}
btnModalClose.addEventListener("click", modalEvt.close);
// 👆 닫기 버튼 클릭 시 모달을 닫습니다.
modalDim.addEventListener("click", modalEvt.close);
// 👆 딤(검정 배경) 클릭 시 모달을 닫습니다.

// !! 🤓 TEST 🤓 !!
var btnPopup = document.querySelector(".js-open-popup");
btnPopup.addEventListener("click", modalEvt.open);
