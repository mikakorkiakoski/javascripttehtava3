document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("surveyForm");

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Validate name field (required)
        if (name.trim() === "") {
            alert("Please enter your name.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Validate email field (required and valid email format)
        if (email.trim() === "") {
            alert("Please enter your email.");
            event.preventDefault(); // Prevent form submission
            return;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                event.preventDefault(); // Prevent form submission
                return;
            }
        }
    });
});