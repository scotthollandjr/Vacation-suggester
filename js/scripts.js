$(document).ready(function() {
  $("form#questions").submit(function() {
    var weatherVal = $("select#weather").val();
    var landscapeVal = $("select#landscape").val();
    var fancyVal = $("select#fancy").val();

    var distanceVal = $("select#distance").val();
    var factionVal = $("select#faction").val();

    var className = "." + weatherVal + "." + landscapeVal + "." + fancyVal;

    if ( distanceVal === "far" ) {
      $("p.distance").append("<br><strong>Good thing you want to travel far, cuz this place is off the maps!</strong>");
    } else if ( distanceVal === "notfar" ){
      $("p.distance").append("<br><strong>You said not too far, this planet isn't TOO far..</strong>");
    }

    if ( factionVal === "dark" ) {
      $("#red").toggle();
    } else if ( factionVal === "light" ) {
      $("#green").toggle();
    }

    $("#first").toggle();
    $(className).toggle();

    event.preventDefault();
  });
});
