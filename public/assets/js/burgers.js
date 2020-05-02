$(function() {
  
  $(".submit-form").on("submit", function(event) {
    event.preventDefault();

      var new_burger = {
        burger_name: $("#burguer_name").val().trim(),
        devoured: 0
      };
      $.ajax("/api/burger", {
        type: "POST",
        data: new_burger
      }).then(
        function() {
          location.reload();
        }
      );
    
  });

  $(".devoured").on("click", function(event) {
    var burger_id = $(this).data("id");
    var devoured = 1
    var devouredStatus = {
      devoured: devoured
    };
    $.ajax("/api/burger/" + burger_id, {
      type: "PUT",
      data: devouredStatus
    }).then(
      function() {
        location.reload();
      }
    );
  });

  

  $(".delete").on("click", function(event) {
    var burger_id = $(this).data("id");
    $.ajax("/api/burger/" + burger_id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
    
