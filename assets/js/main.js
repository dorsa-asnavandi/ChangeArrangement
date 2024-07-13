$(document).ready(function () {
  $(".select-items > *").click(function () {
    const selectedVal = $(this).html();
    const selectedOption = $(this).parents(".custom-select").data("type");

    $(".items-container").css(selectedOption, selectedVal);
  });

  $(".checkbox__trigger").change(function () {
    const isCheck = $(this).prop("checked");

    if (isCheck) {
      $(".items-container").css("flex-wrap", "wrap");
    } else {
      $(".items-container").css("flex-wrap", "nowrap");
    }
  });
});
