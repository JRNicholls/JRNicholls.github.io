$(document).ready(function() {
  $("#header-placeholder").load("header.html");
  $("#demo").html("Hello, World!");
});

$(document).ready(function() {
    $.ajax({
        url : "header.txt",
        dataType: "html",
        success : function (data) {
            $("#header-placeholder").html(data);
        }
    });
});
