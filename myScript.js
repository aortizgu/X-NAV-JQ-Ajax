$(document).ready(function(){
    $("#okButton").click(function(){
        $.ajax({
            url: '/X-NAV-JQ-Ajax/data.html',
            type: 'GET',
            cache: false
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

    $("#fakeButton").click(function(){
        $.ajax({
            url: '/X-NAV-JQ-Ajax/fakedata.html',
            type: 'GET',
            cache: false
        })
        .done(function(data, status) {
            $('#box').html(data)
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            alert('something was wrong (·_·)')
            console.log("complete");
        });
    });
});
