document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    const formData = new FormData(event.target);
    const data = {
        username: formData.get("username"),
        password: formData.get("password")
    };

    // Define headers
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    // Send form data to backend using Fetch API
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
    })
    .then(response => response.json()) // Parse response as JSON
    .then(res => {
        // Handle response data
        console.log(res); // Example: log the response data
        if (res) {
            alert("User created successfully. Now you can login to access your account!"); // Show success message
            window.location.href = "/front/login/login.html"; // Redirect to home page
        } else {
            alert("Something went wrong!!! Please try again later."); // Show error message
        }
    })
    .catch(error => {
        console.error("Error:", error); // Log any errors
        alert("An error occurred. Please try again later."); // Show error message
    });
});
