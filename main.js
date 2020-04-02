$("#li-accounts").click(function () {
  $(".li-accounts-menu").toggle();
  $(".li-products-menu").hide();
  $(".li-help-menu").hide();
  $(".li-company-menu").hide();
})
$("#li-products").click(function () {
  $(".li-products-menu").toggle();
  $(".li-accounts-menu").hide();
  $(".li-help-menu").hide();
  $(".li-company-menu").hide();
})
$("#li-help").click(function () {
  $(".li-help-menu").toggle();
  $(".li-accounts-menu").hide();
  $(".li-products-menu").hide();
  $(".li-company-menu").hide();
})
$("#li-company").click(function () {
  $(".li-company-menu").toggle();
  $(".li-accounts-menu").hide();
  $(".li-products-menu").hide();
  $(".li-help-menu").hide();
})
$("main").click(function () {
  $(".li-company-menu").hide();
  $(".li-accounts-menu").hide();
  $(".li-products-menu").hide();
  $(".li-help-menu").hide();
})
// parte responsive---------------------------------------
$("#chiudi").click(function () {
  $(".resp-menu-container").removeClass("show");
  $(".ul-men-resp").removeClass("show");
})
$("#hamburger").click(function () {
  $(".resp-menu-container").addClass("show");
})
$(".li-men-resp").click(function () {
  $(this).siblings().toggleClass("show");
  $(".li-men-resp").not(this).siblings().removeClass("show");
})
