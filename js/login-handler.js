$(document).ready(function () {
    $("#loginForm").submit(function (e) { 
        e.preventDefault();
        
        $("#emailVal").text("");
        $("#passwordVal").text("");

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

        function validateEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailPattern.test(email);
        }

        if (isValidForm) {
            var users = Cookies.get('users');
            users = JSON.parse(users);

            if (users.some((user) => user.email === email && user.password === password)) {
                alert("Login success");
                let currentUser = users.find((user) => user.email === email)
                window.location.href = "ViewContent.html";
                Cookies.set('currentUser', JSON.stringify(currentUser), { expires: 7 });
            }
            else {
                $("#passwordVal").text("Email or password is incorrect");
            }
        }
    });
});