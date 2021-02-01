"use strict";

// remove modal
// 當Modal顯示出來時作動
$("#removeModal").on("show.bs.modal", function (event) {
  // 取得點擊的btn
  var btn = $(event.relatedTarget); // 取出按鈕的值(取出data-title)

  var title = btn.data("title"); // 將title寫回Modal

  var modal = $(this); // modal找到本身的class name .modal-title，使用.text(title)替換成中文字

  modal.find(".modal-title").text("確認刪除" + title);
});