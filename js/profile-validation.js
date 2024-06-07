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

    // Set the current user's data into the fields
    let currentUser = Cookies.get('currentUser');
    currentUser = JSON.parse(currentUser);
    $("#email").text(currentUser.email);
    $("#firstName").val(currentUser.firstname);
    $("#lastName").val(currentUser.lastname);
    $("#phone").val(currentUser.phone);
    $("#description").text(currentUser.description);       

    $("#submitBtn").click(function (e) { 
        e.preventDefault();

        let isValidData = true;
        // Validation
        const firstName = $.trim($("#firstName").val()); 
        $("#firstNameVal").text("");
        
        if (firstName.length > 30) {
            $("#firstNameVal").text("First name must not exceed 30 chars"); 
            $("#firstName").focus();
            isValidData = false;
        }
        if (firstName.length < 3) {
            $("#firstNameVal").text("First name must be at least 3 chars");
            $("#firstName").focus();
            isValidData = false;
        } 
        if (!validateName(firstName)) {
            $("#firstNameVal").text("Invalid name");
            $("#firstName").focus();
            isValidData = false;
        }         

        const lastName = $.trim($("#lastName").val());
        $("#lastNameVal").text("");

        if (lastName.length > 30) {
            $("#lastNameVal").text("Last name must not exceed 30 chars"); 
            $("#lastName").focus();
            isValidData = false;
        }
        if (lastName.length < 3) {
            $("#lastNameVal").text("Last name must be at least 3 chars");
            $("#lastName").focus();
            isValidData = false;
        } 
        if (!validateName(lastName)) {
            $("#lastNameVal").text("invalid name");
            $("#lastName").focus();
            isValidData = false;
        } 

        const phone = $.trim($("#phone").val());
        $("#phoneVal").text("");

        if (phone.length == 0) {
            $("#phoneVal").text("Phone number must not exceed 13 chars"); 
            $("#phone").focus();
            isValidData = false;
        }

        if (phone.length > 13) {
            $("#phoneVal").text("Phone number must not exceed 13 chars"); 
            $("#phone").focus();
            isValidData = false;
        }
        if (phone.length < 9) {
            $("#phoneVal").text("Phone number must be at least 9 chars");
            $("#phone").focus();
            isValidData = false;
        } 
        if (!validatePhone(phone)) {
            $("#phoneVal").text("Invalid phone number");
            $("#phone").focus();
            isValidData = false;
        } 

        const description = $.trim($("#description").val());
        $("#descriptionVal").text("");

        if (description.length > 200) {
            $("#descriptionVal").text("Description must not exceed 200 chars"); 
            $("#description").focus();
            isValidData = false;
        }  
        
        if (isValidData) {
            currentUser.firstname = $.trim($("#firstName").val());
            currentUser.lastname = $.trim($("#lastName").val())
            currentUser.description = $.trim($("#description").val())
            currentUser.phone = $.trim($("#phone").val())
            
            let users = JSON.parse(Cookies.get('users'));
            var user = users.find((user) => user.email === currentUser.email);
            users[users.indexOf(user)] = currentUser;
            
            Cookies.set('currentUser', JSON.stringify(currentUser), { expires: 7 });
            Cookies.set('users', JSON.stringify(users), { expires : 7 });     
            
            console.log(users);
            console.log(currentUser);  
            alert("Edit successful");
            location.reload();                      
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