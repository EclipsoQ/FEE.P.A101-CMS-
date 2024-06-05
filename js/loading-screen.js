$(document).ready(function () {
    let loadingStartTime;
    
    // Show loading screen        
    $(document).ajaxStart(function() {
        $("#loadingScreen").show();
        $("#contents").hide();
        loadingStartTime = Date.now();
    });   
    
    $(document).ajaxStop(function() {
        let elapsedTime = Date.now() - loadingStartTime;
        let remainingTime = Math.max(0, 5000 - elapsedTime); // Calculate remaining time to reach 5 seconds
        
        setTimeout(function() {
            $("#loadingScreen").fadeOut(function() {
                $("#contents").fadeIn();                
            });
        }, remainingTime);     
        
    });

    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",                
        success: function (response) {
            console.log("success");
        },
        error: function(error) {
            console.log("error");
        } 
    });
});