$(document).ready(function () {
    $("#registerForm").submit(function (e) { 
        e.preventDefault();
        
        $("#emailVal").text("");
        $("#nameVal").text("");
        $("#passwordVal").text("");
        $("#rePasswordVal").text("");

        let isValidForm = true;

        // Email validation
        let email = document.getElementById("email").value.trim();        
        if (email.length > 50) {
            document.getElementById("emailVal").innerText = "Email must not exceed 50 chars";
            isValidForm = false;
        }
        if (email.length < 5) {
            document.getElementById("emailVal").innerText = "Email must be 5 chars min";
            isValidForm = false;
        } 
        if (!validateEmail(email)) {
            document.getElementById("emailVal").innerText = "Invalid email format";
            isValidForm = false;
        }

        // Password validation
        let password = document.getElementById("password").value.trim();
        if (password.length > 30) {
            document.getElementById("passwordVal").innerText = "Password must not exceed 30 chars";
            isValidForm = false;
        }
        if (password.length < 8) {
            document.getElementById("passwordVal").innerText = "Password must be 8 chars min";
            isValidForm = false;
        }         

        // Re Password validation
        let rePassword = document.getElementById("rePassword").value.trim();
        if (rePassword.length > 30) {
            document.getElementById("rePasswordVal").innerText = "Re Password must not exceed 30 chars";
            isValidForm = false;
        }
        if (rePassword.length < 8) {
            document.getElementById("rePasswordVal").innerText = "Re Password must be 8 chars min";
            isValidForm = false;
        } 
        if (rePassword != password) {
            document.getElementById("rePasswordVal").innerText = "Re Password must match the Password";
            isValidForm = false;
        }

        // Username validation
        let userName = document.getElementById("username").value.trim();
        if (userName.length > 30) {
            document.getElementById("nameVal").innerText = "Username must not exceed 30 chars";
            isValidForm = false;
        }
        if (userName.length < 3) {
            document.getElementById("nameVal").innerText = "Username must be 3 chars min";
            isValidForm = false;
        } 
        
        function validateEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailPattern.test(email);
        }        
       
        if (isValidForm) {
            // Get the current user list        
            var users = Cookies.get('users');
            if (users) {
                users = JSON.parse(users);            
            }
            else {
                // Create a user list if not existed
                var dummyUsers = [
                    { username: 'user1', email: 'user1@example.com', password: "abc12345" },
                    { username: 'user2', email: 'user2@example.com', password: "abc12345" },
                    { username: 'user3', email: 'user3@example.com', password: "abc12345" }
                ];
                Cookies.set('users', JSON.stringify(dummyUsers), { expires: 7 });
            }

            // Save user
            let newUser = {
                username: userName,
                email: email,
                password: password 
            }

            // Check if new user has duplicated properties
            let isDuplicatedEmail = users.some(function(user) {
                return user.email == newUser.email; 
            });
            let isDuplicatedName = users.some(function(user) {
                return user.username == newUser.username; 
            });
                        
            if (isDuplicatedEmail) {
                $("#emailVal").text("Email already taken");
            } 
            else if (isDuplicatedName) {
                $("#nameVal").text("Name already taken");
            }
            else {
                users.push(newUser);
                // Save the updated users back to cookie
                Cookies.set('users', JSON.stringify(users), { expires: 7 });
                
                alert("Registration successful");
                window.location.href = "LoginPage.html";
            }
        }
    });
});