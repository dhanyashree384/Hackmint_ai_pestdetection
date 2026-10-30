document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // GET HTML ELEMENTS
    // ================================

    const imageInput = document.getElementById("imageInput");
    const preview = document.getElementById("preview");
    const analyzeBtn = document.getElementById("analyzeBtn");

    const loading = document.getElementById("loading");
    const resultContainer =
        document.getElementById("resultContainer");

    const result = document.getElementById("result");


    // ================================
    // IMAGE PREVIEW
    // ================================

    imageInput.addEventListener("change", function () {

        const file = imageInput.files[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {

            alert("Please select an image file.");

            imageInput.value = "";

            return;
        }


        const reader = new FileReader();


        reader.onload = function (event) {

            preview.src = event.target.result;

            preview.style.display = "block";

        };


        reader.readAsDataURL(file);

    });


    // ================================
    // ANALYZE IMAGE
    // ================================

    analyzeBtn.addEventListener("click", async function () {

        console.log("Analyze button clicked");


        const file = imageInput.files[0];


        // No image selected

        if (!file) {

            alert("Please select an image first.");

            return;
        }


        // Create FormData

        const formData = new FormData();

        formData.append("image", file);


        // Show loading

        loading.style.display = "block";

        resultContainer.style.display = "none";

        analyzeBtn.disabled = true;

        analyzeBtn.innerText = "Analyzing...";


        try {

            console.log("Sending image to Flask...");


            // Send image to Python Flask

            const response = await fetch(
                "/predict",
                {
                    method: "POST",
                    body: formData
                }
            );


            console.log(
                "Flask response:",
                response.status
            );


            const data = await response.json();


            console.log(
                "Flask data:",
                data
            );


            // Check for errors

            if (!response.ok) {

                throw new Error(
                    data.error ||
                    "Prediction failed."
                );

            }


            // Display response

            if (data.result) {

                result.textContent =
                    data.result;

            } else if (data.message) {

                result.textContent =
                    data.message;

            } else {

                result.textContent =
                    "No prediction result received.";

            }


            resultContainer.style.display =
                "block";


        } catch (error) {

            console.error(
                "Error:",
                error
            );


            result.textContent =
                "Error: " + error.message;


            resultContainer.style.display =
                "block";

        }


        // Stop loading

        loading.style.display = "none";

        analyzeBtn.disabled = false;

        analyzeBtn.innerText =
            "🔍 Analyze Image";

    });

});