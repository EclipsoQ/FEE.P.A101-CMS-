$(document).ready(function () {
    $("#contentForm").submit(function (e) { 
        e.preventDefault();
        
        const title = $.trim($("#title").val());        
        const brief = $.trim($("#brief").val());
        const content = $.trim($("#content").val());

        if (title.length > 200) {
            $("#titleVal").text("Title must not exceed 200 chars"); 
            $("#title").focus();
        }
        if (title.length < 10) {
            $("#titleVal").text("Title must be at least 10 chars");
            $("#title").focus();
        } 
        
        if (brief.length > 250) {
            $("#briefVal").text("Brief must not exceed 150 chars"); 
            $("#brief").focus();
        }
        if (brief.length < 30) {
            $("#briefVal").text("Brief must be at least 30 chars");
            $("#brief").focus();
        } 

        if (content.length > 1000) {
            $("#contentVal").text("Content must not exceed 200 chars"); 
            $("#content").focus();
        }
        if (content.length < 50) {
            $("#contentVal").text("Content must be at least 10 chars");
            $("#content").focus();
        } 
    });    
});