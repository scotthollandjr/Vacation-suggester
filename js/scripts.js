$(document).ready(function() {
  $("form#questions").submit(function() {
    var weatherVal = $("select#weather").val();
    var landscapeVal = $("select#landscape").val();
    var fancyVal = $("select#fancy").val();
    var distanceVal = $("select#distance").val();
    var populationVal = $("select#population").val();

    var className = "." + weatherVal + "." + landscapeVal + "." + fancyVal + "." + distanceVal + "." + populationVal;

    $("#first").toggle();
    $(className).toggle();

    event.preventDefault();
  });
});
