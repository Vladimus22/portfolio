$(document).ready(function(){
    $(".btn_1").click(function(){
      $(".preview_video").hide();
    });
    $(".icon_video_1").click(function(){
      $(".preview_video").show();
      $(".preview_video_subtitle").html("Season 1 Episode 1");
      $(".video").attr("src","video_1.mp4");
    });
    $(".icon_video_2").click(function(){
      $(".preview_video").show();
      $(".preview_video_subtitle").html("Season 1 Episode 2");
      $(".video").attr("src","video_2.mp4");
    });
    $(".icon_video_3").click(function(){
      $(".preview_video").show();
      $(".preview_video_subtitle").html("Season 1 Episode 3");
      $(".video").attr("src","video_3.mp4");
    });
    $(".icon_video_4").click(function(){
      $(".preview_video").show();
      $(".preview_video_subtitle").html("Season 1 Episode 4");
      $(".video").attr("src","video_4.mp4");
    });
  });