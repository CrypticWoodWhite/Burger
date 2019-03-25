
$(function() {
    $(".eat-burger").on("click", function(event) {
        var id = $(this).data("id");
        var nowDevoured = $(this).attr("devoured", true);
  
        var updNowDevoured = {
            devoured: nowDevoured
        };
  
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updNowDevoured
        }).then(
            function(err, res) {
                if (err) throw err;
                console.log("changed devoured to ", nowDevoured);
                location.reload();
            }
        );
    });
  
    $("#addBurgerButton").on("submit", function(event) {
        event.preventDefault();
  
        var newBurger = {
          name: $("#addBurgerName").val().trim(),
          devoured: false
        };
  
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(err, res) {
                if (err) throw err;
                console.log("created new burger");
                location.reload();
            }
        );

        $("#addBurgerName").reset();
    });
  
});
  