$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
            url: '/data.html',
        })
        .done(function(data, status) {
            $('#box').html(data)
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

    });
});