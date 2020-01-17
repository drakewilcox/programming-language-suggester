$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var quest1 = parseInt($("input:radio[name=quest1]:checked").val());
    var quest2 = parseInt($("input:radio[name=quest2]:checked").val());
    var quest3 = parseInt($("input:radio[name=quest3]:checked").val());
    var quest4 = parseInt($("input:radio[name=quest4]:checked").val());
    var quest5 = parseInt($("input:radio[name=quest5]:checked").val());


    if (quest1 + quest2 + quest3 + quest4 + quest5 <= 8) {
      $(".csharp").show();
      $(".javascript").hide();
      $(".swift").hide();
    }
    else if (quest1 + quest2 + quest3 + quest4 + quest5 <= 11) {
      $(".csharp").hide();
      $(".javascript").show();
      $(".swift").hide();
    }
    else if (quest1 + quest2 + quest3 + quest4 + quest5 <= 15) {
      $(".csharp").hide();
      $(".javascript").hide();
      $(".swift").show();
    }
    event.preventDefault();
  });
});