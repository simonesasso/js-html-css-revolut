$("#li-accounts").mouseenter(function () {
  $(".li-accounts-menu").show();
  $(".li-products-menu").hide();
  $(".li-help-menu").hide();
  $(".li-company-menu").hide();
})
$("#li-products").mouseenter(function () {
  $(".li-products-menu").show();
  $(".li-accounts-menu").hide();
  $(".li-help-menu").hide();
  $(".li-company-menu").hide();
})
$("#li-help").mouseenter(function () {
  $(".li-help-menu").show();
  $(".li-accounts-menu").hide();
  $(".li-products-menu").hide();
  $(".li-company-menu").hide();
})
$("#li-company").mouseenter(function () {
  $(".li-company-menu").show();
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
