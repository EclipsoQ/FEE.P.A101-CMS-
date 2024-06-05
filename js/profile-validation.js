// Profile validation w/ simple jQuery selectors 
$(document).ready(function() {
    $("#profileForm").submit(function(event) {
        // Prevent default form submission        
        event.preventDefault();        

        const firstName = $("#firstName").val();        
        const lastName = $("#lastName").val();
        const phone = $("#phone").val();
        const description = $("#description").val();

        if (firstName.length > 30) {
            $("#firstNameVal").text("First name must not exceed 30 chars"); 
            $("#firstName").focus();
        }
        if (firstName.length < 3) {
            $("#firstNameVal").text("First name must be at least 3 chars");
            $("#firstName").focus();
        } 

        if (lastName.length > 30) {
            $("#lastNameVal").text("Last name must not exceed 30 chars"); 
            $("#lastName").focus();
        }
        if (lastName.length < 3) {
            $("#lastNameVal").text("Last name must be at least 3 chars");
            $("#lastName").focus();
        } 

        if (phone.length > 13) {
            $("#phoneVal").text("Phone number must not exceed 13 chars"); 
            $("#phone").focus();
        }
        if (phone.length < 9) {
            $("#phoneVal").text("Phone number must be at least 9 chars");
            $("#phone").focus();
        } 

        if (description.length > 200) {
            $("#descriptionVal").text("Description must not exceed 200 chars"); 
            $("#description").focus();
        }        
    });
    
});