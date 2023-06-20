
  $(".l-main__top ul").slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
    infinite: true, // 無限スライド
  });

  // $(".slider__top").slick({
  //   autoplay: true, // 自動再生
  //   autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
  //   infinite: true, // 無限スライド
  //   dots: true,
  //   asNavFor:".slider__middle", //追加（テキストスライダーを追従させる
  //   autoplay:true            //追加（自動再生
  // });

  // $(".slider__middle").slick({
  //   autoplay: true, // 自動再生
  //   autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
  //   infinite: true, // 無限スライド
  // });


  $(function () {
    $(".slider__bottom").slick({
      arrows: false,
      autoplay: true,
      pause: 5000,
      slidesToShow: 4,
      speed: 600,
      responsive: [
        {
          breakpoint: 768,
          settings: "unslick",
        },
      ],
    });
  });
  $(window).on("resize orientationchange", function () {
    $(".slider__bottom").slick("resize");
  });


  // レスポンシブハンバーガーメニュー
  $(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });
