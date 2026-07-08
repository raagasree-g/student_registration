async function registerStudent() {

    // Get values from the form
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const year = Number(document.getElementById("year").value);

    // Basic validation
    if (!name || !course || !year) {
        document.getElementById("message").innerHTML =
            "Please fill all fields.";
        return;
    }

    try {

        const response = await fetch(
            "https://ram09.app.n8n.cloud/webhook/student-registration",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    course: course,
                    year: year
                })
            }
        );

        const result = await response.json();

        console.log(result);

        document.getElementById("message").innerHTML =
            "✅ Registration Successful!";

        // Clear the form
        document.getElementById("name").value = "";
        document.getElementById("course").value = "";
        document.getElementById("year").value = "";

    } catch (error) {

        console.error(error);

        document.getElementById("message").innerHTML =
            "❌ Registration Failed.";

    }
}