// Authentication validation (login & register) goes here

document.addEventListener("DOMContentLoaded", function() {
    let submitBtn = this.getElementById("btn");
    submitBtn.addEventListener("click", function(e) {                                    
        // Prevent default form submission
        e.preventDefault();
                        
        // Email validation
        let email = document.getElementById("email").value.trim();        
        if (email.length > 50) {
            document.getElementById("emailVal").innerText = "Email must not exceed 50 chars";
        }
        if (email.length < 5) {
        document.getElementById("emailVal").innerText = "Email must be 5 chars min";
        } 

        // Password validation
        let password = document.getElementById("password").value.trim();
        if (password.length > 30) {
            document.getElementById("passwordVal").innerText = "Password must not exceed 30 chars";
        }
        if (password.length < 8) {
            document.getElementById("passwordVal").innerText = "Password must be 8 chars min";
        } 

        // Re Password validation
        let rePassword = document.getElementById("rePassword").value.trim();
        if (rePassword.length > 30) {
            document.getElementById("rePasswordVal").innerText = "Re Password must not exceed 30 chars";
        }
        if (rePassword.length < 8) {
            document.getElementById("rePasswordVal").innerText = "Re Password must be 8 chars min";
        } 
        if (rePassword != password) {
            document.getElementById("rePasswordVal").innerText = "Re Password must match the Password";
        }

        // Username validation
        let userName = document.getElementById("username").value.trim();
        if (userName.length > 30) {
            document.getElementById("nameVal").innerText = "Username must not exceed 30 chars";
        }
        if (userName.length < 3) {
            document.getElementById("nameVal").innerText = "Username must be 3 chars min";
        } 
                        
    });
});