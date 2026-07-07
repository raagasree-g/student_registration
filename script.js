const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Read input values
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const year = Number(document.getElementById("year").value);

    // Create JSON object
    const student = {
        name: name,
        course: course,
        year: year
    };

    try {

        const response = await fetch("YOUR_WEBHOOK_URL", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        const data = await response.json();

        if (response.ok) {
            message.style.color = "green";
            message.textContent = data.message || "Student Registered Successfully!";

            // Clear the form
            form.reset();

        } else {
            message.style.color = "red";
            message.textContent = "Registration Failed!";
        }

    } catch (error) {

        message.style.color = "red";
        message.textContent = "Unable to connect to the server.";

        console.error(error);
    }

});