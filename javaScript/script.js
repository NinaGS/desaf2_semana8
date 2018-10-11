



$(".featured").attr("src", "https://picsum.photos/400/400?image=6")

$(".thumb").on("click", function(){
  source = $(this).attr("src");
  $(".featured").attr("src", source);
})