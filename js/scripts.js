$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var quest1 = parseInt($("input:radio[name=quest1]:checked").val());
    var quest2 = parseInt($("input:radio[name=quest2]:checked").val());
    var quest3 = $("input:radio[name=quest3]:checked").val();
    var quest4 = $("input:radio[name=quest4]:checked").val();
    var quest5 = $("input:radio[name=quest5]:checked").val();
    if (quest1 + quest2 === 4) {
      $(".csharp").show();
    }
    else if (quest1 + quest2 === 2) {
      $(".javascript").show();
    }
    event.preventDefault();
  });
});