// Profile validation w/ simple jQuery selectors 

// Validate upon changing
$(document).ready(function () {
    function validateName(name) {
        const pattern = /^[a-zA-Z\s'-]/;
        return pattern.test(name);
    }

    function validatePhone(number) {
        const pattern = /^\+?[0-9\s-().]/
        return pattern.test(number);
    }

    $("#firstName").change(function (e) {
        e.preventDefault();         
        
        const firstName = $.trim($("#firstName").val()); 
        $("#firstNameVal").text("");
        
        if (firstName.length > 30) {
            $("#firstNameVal").text("First name must not exceed 30 chars"); 
            $("#firstName").focus();
        }
        if (firstName.length < 3) {
            $("#firstNameVal").text("First name must be at least 3 chars");
            $("#firstName").focus();
        } 
        if (!validateName(firstName)) {
            $("#firstNameVal").text("Invalid name");
            $("#firstName").focus();
        }         
    });

    $("#lastName").change(function (e) { 
        e.preventDefault();
        
        const lastName = $.trim($("#lastName").val());
        $("#lastNameVal").text("");

        if (lastName.length > 30) {
            $("#lastNameVal").text("Last name must not exceed 30 chars"); 
            $("#lastName").focus();
        }
        if (lastName.length < 3) {
            $("#lastNameVal").text("Last name must be at least 3 chars");
            $("#lastName").focus();
        } 
        if (!validateName(lastName)) {
            $("#lastNameVal").text("invalid name");
            $("#lastName").focus();
        } 
    });

    $("#phone").change(function (e) { 
        e.preventDefault();
        
        const phone = $.trim($("#phone").val());
        $("#phoneVal").text("");

        if (phone.length > 13) {
            $("#phoneVal").text("Phone number must not exceed 13 chars"); 
            $("#phone").focus();
        }
        if (phone.length < 9) {
            $("#phoneVal").text("Phone number must be at least 9 chars");
            $("#phone").focus();
        } 
        if (!validatePhone(phone)) {
            $("#phoneVal").text("Invalid phone number");
            $("#phone").focus();
        } 
    });

    $("#description").change(function (e) { 
        e.preventDefault();
        
        const description = $.trim($("#description").val());
        $("#descriptionVal").text("");

        if (description.length > 200) {
            $("#descriptionVal").text("Description must not exceed 200 chars"); 
            $("#description").focus();
        }  
    });
});

// Validate on form submission
// $(document).ready(function() {
//     $("#profileForm").submit(function(event) {
//         // Prevent default form submission        
//         event.preventDefault();        

//         const firstName = $.trim($("#firstName").val());       
//         const lastName = $.trim($("#lastName").val());
//         const phone = $.trim($("#phone").val());
//         const description = $.trim($("#description").val());

//         $("#firstNameVal").text("");
//         $("#lastNameVal").text("");
//         $("#phoneVal").text("");
//         $("#descriptionVal").text("");

//         if (firstName.length > 30) {
//             $("#firstNameVal").text("First name must not exceed 30 chars"); 
//             $("#firstName").focus();
//         }
//         if (firstName.length < 3) {
//             $("#firstNameVal").text("First name must be at least 3 chars");
//             $("#firstName").focus();
//         } 
//         if (!validateName(firstName)) {
//             $("#firstNameVal").text("Invalid name");
//             $("#firstName").focus();
//         } 

//         if (lastName.length > 30) {
//             $("#lastNameVal").text("Last name must not exceed 30 chars"); 
//             $("#lastName").focus();
//         }
//         if (lastName.length < 3) {
//             $("#lastNameVal").text("Last name must be at least 3 chars");
//             $("#lastName").focus();
//         } 
//         if (!validateName(lastName)) {
//             $("#lastNameVal").text("invalid name");
//             $("#lastName").focus();
//         } 

//         if (phone.length > 13) {
//             $("#phoneVal").text("Phone number must not exceed 13 chars"); 
//             $("#phone").focus();
//         }
//         if (phone.length < 9) {
//             $("#phoneVal").text("Phone number must be at least 9 chars");
//             $("#phone").focus();
//         } 
//         if (!validatePhone(phone)) {
//             $("#phoneVal").text("Invalid phone number");
//             $("#phone").focus();
//         } 

//         if (description.length > 200) {
//             $("#descriptionVal").text("Description must not exceed 200 chars"); 
//             $("#description").focus();
//         }                                
//     });

//     function validateName(name) {
//         const pattern = /^[a-zA-Z\s'-]/;
//         return pattern.test(name);
//     }
//     function validatePhone(number) {
//         const pattern = /^\+?[0-9\s-().]/
//         return pattern.test(number);
//     }
    
// });