$(function() {
    $(".change-cast").on("click", function(event){
        var id = $(this).data("id");
        var cast = $(this).data("cast");

        var isCast = {
            cast: cast
        };

        $.ajax("/api/spells/" + id, {
            type: "PUT",
            data: isCast
        }).then(function() {
            console.log("changed cast to ", cast);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newSpell = {
            name: $("#spel").val().trim()
        };

        $.ajax("/api/cats", {
            type: "POST",
            data: newSpell
        }).then(function() {
            console.log("created a new spell");
            location.reload();
        });
    });
});