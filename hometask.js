var button_click=document.getElementsByTagName("guessInput");

button_click.onclick=window_flow;
function window_flow() {
	$(".popup,.popup_overlay").fadeIn(100); //
}

  
  $(".closer,.popup_overlay").click(function(){
    $(".popup,.popup_overlay").fadeOut(1000); //скрываем всплывающее окно
  });