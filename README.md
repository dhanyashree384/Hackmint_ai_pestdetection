# 🌱 AI-Based Crop Pest Detection System

## 📌 Project Description

The **AI-Based Crop Pest Detection System** is a machine learning project designed to identify agricultural pests from uploaded crop images. The system uses image classification techniques to recognize different types of pests and aims to provide useful information to help farmers understand pest problems and take appropriate preventive measures.

The project combines an AI-based image classification model with a web interface developed using HTML, CSS, JavaScript, and Flask. Users can upload an image of a pest through the website, and the application processes the image for identification.

## 🎯 Objectives

- Identify agricultural pests from images using artificial intelligence.
- Develop a simple and user-friendly web interface for image uploads.
- Integrate a trained image classification model with a Flask web application.
- Provide information about identified pests and possible control measures.
- Support early pest identification and informed agricultural decision-making.

## 🐛 Pest Categories

The model is intended to classify the following nine pest categories:

1. Aphids
2. Armyworm
3. Beetle
4. Bollworm
5. Grasshopper
6. Mites
7. Mosquito
8. Sawfly
9. Stem Borer

## 🛠️ Technologies Used

- **Python** — Backend programming and AI model integration.
- **TensorFlow/Keras or PyTorch** — Deep learning model development, depending on the model used.
- **Flask** — Web application backend.
- **HTML** — Web page structure.
- **CSS** — Website styling and layout.
- **JavaScript** — User interaction and image upload handling.
- **Google Colab** — Model training and experimentation.
- **VS Code** — Local development and project management.

## ⚙️ How It Works

1. The user opens the web application.
2. The user selects an image containing an agricultural pest.
3. The image is uploaded to the Flask backend.
4. The image is preprocessed according to the trained model's requirements.
5. The trained AI model predicts the pest category.
6. The application displays the predicted pest and, when implemented, relevant information and suggested control measures.

## 📂 Project Structure

```text
Crop-Pest-Detection/
│
├── app.py                 # Flask backend application
├── index.html             # Website interface
├── style.css              # Website styling
├── script.js              # Frontend interactions
├── model/                 # Trained model files, if organized separately
├── dataset/               # Pest image dataset, if stored locally
├── requirements.txt       # Python dependencies
└── README.md              # Project documentation
```

*Note: The structure above is an example. Update it to match the actual files and folders in your project.*

## 🚀 Installation and Setup

### 1. Clone or Download the Project

Download the project files and open the project folder in Visual Studio Code.

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate it on Windows:

```powershell
.\venv\Scripts\Activate.ps1
```

### 3. Install Dependencies

If a `requirements.txt` file is available:

```bash
pip install -r requirements.txt
```

Otherwise, install the packages required by your implementation. For example, a TensorFlow-based project may require:

```bash
pip install flask tensorflow pillow numpy
```

### 4. Run the Application

```bash
python app.py
```

### 5. Open the Website

Open your browser and visit:

```text
http://127.0.0.1:5000
```

## 📊 Dataset

The project uses images of agricultural pests to train and evaluate an image classification model. The dataset is organized into categories corresponding to the supported pest classes.

The dataset and trained model must be available at the appropriate paths for the application to perform predictions.

## 🌾 Expected Benefits

- Helps users identify common agricultural pests from images.
- Makes AI-based pest identification accessible through a web interface.
- Can help farmers investigate potential pest problems earlier.
- Provides a foundation for future agricultural decision-support tools.

## 🔮 Future Enhancements

- Improve prediction accuracy using additional high-quality training images.
- Display pest descriptions, symptoms, and recommended management strategies.
- Add confidence scores for model predictions.
- Support more pest categories and crop types.
- Deploy the application online for wider accessibility.
- Add multilingual support for farmers.
- Integrate expert-verified pest management recommendations.

## ⚠️ Limitations

Prediction quality depends on the training dataset, image quality, and model performance. The system should be validated on real-world crop images before practical use. Its predictions should be treated as decision-support information rather than a replacement for advice from agricultural experts.

## 👩‍💻 Conclusion

The AI-Based Crop Pest Detection System demonstrates how deep learning and web technologies can be combined to develop an accessible agricultural application. By identifying pests from images, the project aims to support early pest recognition and provide a foundation for smarter, technology-assisted crop protection.
```
