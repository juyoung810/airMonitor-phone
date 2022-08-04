/* 핸드폰 화면 이동 */
function moveToA(e) {
  location.href = e.href;
}
/* login -> main 페이지 이동 */
$("#wrap main a.login").click(function (e) {
  e.preventDefault();
  moveToA(this);
});
/* main -> login 페이지 이동 */
$("#wrap header .title a.back-icon").click(function (e) {
  e.preventDefault();
  moveToA(this);
});
/* // 핸드폰 화면 이동 */

/* 전체 - 학년 반 선택 */
/* drop 학년 */
$(document).ready(function () {
  $("nav .level").click(function () {
    $("nav .level ul.drop-opt").toggle(0, 0, 0);
  });
});
/* drop 반 */
$(document).ready(function () {
  $("nav .class").click(function () {
    $("nav .class ul.drop-opt").toggle(0, 0, 0);
  });
});
/* 학년 선택 */
$("nav .level li").click(function () {
  var index = $("nav .level li").index(this);
  $("nav .level .drop-content").text($(this).text());
});
/* 반 선택 */
$("nav .class li").click(function () {
  var index = $("nav .class li").index(this);
  $("nav .class .drop-content").text($(this).text());
});
/* //전체 - 학년 반 선택 */

/* 데이터 없는 경우 함수 호출 */
function noData() {
  $(".inside .air-info").css("display", "none");
  $(".inside .air-info3").css("display", "none");

  /* 데이터 없습니다 div */
  $(".inside .none-info").css("display", "block");
}
/* 데이터 있는 경우 */
function existData() {
  $(".inside .air-info").css("display", "block");
  $(".inside .air-info3").css("display", "block");

  /* 데이터 없습니다 div */
  $(".inside .none-info").css("display", "none");
}

/* 핸드폰 - 즐겨찾기 이동 */
$(document).ready(function () {
  $("#wrap header button.last").click(function (e) {
    e.preventDefault();
    /* button css 변경*/
    $("#wrap header button.first").removeClass("sel");
    $(this).addClass("sel");

    /* div 변경*/
    $("#wrap nav .dropdown-layer").css("display", "none");
    $("#wrap nav .input-layer").css("display", "block");

    /* 임시 -> 데이터 없습니다 함수 호출 */
    noData();
  });
});

/* 핸드폰 - 전체 이동 */
$(document).ready(function () {
  $("#wrap header button.first").click(function (e) {
    e.preventDefault();

    /* button css 변경*/
    $("#wrap header button.last").removeClass("sel");
    $(this).addClass("sel");
    /* div 변경*/
    $("#wrap nav .input-layer").css("display", "none");
    $("#wrap nav .dropdown-layer").css("display", "block");

    existData(); // 임시
  });
});

/* 화면 전체 덮는 마스크 눌렀을때 - 마스크 없애기 */
$(document).ready(function () {
  $("html").click(function (e) {
    if ($("#wrap nav .input-layer").has(e.target).length == 0) {
      $("#wrap nav .input-layer").removeClass("mask");
      $(".input-layer .input-history").css("display", "none");
    }
  });
});

/* 즐겨찾기 클릭 시 즐겨찾기 목록 */
$(document).ready(function () {
  $("#wrap nav .input-layer").click(function (e) {
    e.preventDefault();

    /* history 보이도록 */
    $(".input-layer .input-history").css("display", "block");

    $(this).addClass("mask"); // 주변 화면 마스크
  });
});
/* 즐겨찾기 선택 시 text 변경 */
$(document).ready(function () {
  $("#wrap nav .input-layer li").click(function (e) {
    e.preventDefault();

    var index = $("#wrap nav .input-layer li").index($(this));
    $("#wrap nav .input-layer > span").html(
      "<strong style='color:#ffffff'>" + $(this).find("p").text() + "</strong>"
    );
    // 텍스트 선택 시 mask & history 목록 없애기
    $(document).ready(function () {
      $("#wrap nav .input-layer").removeClass("mask");
      $(".input-layer .input-history").css("display", "none");
    });
  });
});

/* 즐겨찾기 삭제 */
$(document).ready(function () {
  $("#wrap nav .input-layer li a").click(function (e) {
    e.preventDefault();

    var index = $("#wrap nav .input-layer li").index($(this).parent());

    $("#wrap nav .input-layer li").eq(index).remove();
    console.log($("#wrap nav .input-layer li").eq(index));
  });
});

/* 별 선택 */
$(document).ready(function () {
  $("nav .btn_star").click(function (e) {
    e.preventDefault();
    $("nav .btn_star").toggleClass("click");
  });
});
