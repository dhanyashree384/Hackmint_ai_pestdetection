from flask import Flask, render_template, request, jsonify

app = Flask(__name__)


# Home page
@app.route("/")
def home():
    return render_template("index.html")


# Prediction route
@app.route("/predict", methods=["POST"])
def predict():

    if "image" not in request.files:
        return jsonify({
            "error": "No image uploaded"
        })

    image = request.files["image"]

    if image.filename == "":
        return jsonify({
            "error": "Please select an image"
        })

    # For now, we are only testing the connection.
    # Your trained model will be connected here in the next step.

    return jsonify({
        "message": "Image received successfully!",
        "filename": image.filename
    })


if __name__ == "__main__":
    app.run(debug=True)