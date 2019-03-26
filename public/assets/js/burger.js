
$(document).ready(function() {

    // eat burger (PUT request)
    $(".eat-burger").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("id");
  
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {devoured: true}
        }).then(function(err, res) {
            if (err) throw err;
            location.reload(true);
        });
    });
    
    // add burger (POST request)
    $("#add-burger-form").on("submit", function(event) {
        event.preventDefault();

        let burger_name = $("#addBurgerName").val().trim();
        let newBurger = {
          burger_name: burger_name,
          devoured: 0
        };
  
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(err, res) {
            if (err) throw err;
            // $("#addBurgerName").val("");
            // location.reload(true);
        });

        // why do these two lines have to be outside the .then() function to work?
        // in preceding PUT request, the same two lines are inside the .then() function
        $("#addBurgerName").val("");
        location.reload(true);
    });
  
});
  