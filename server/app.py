from flask import Flask, render_template, request, jsonify
import cv2
import numpy as np
import pickle
import os
from flask_cors import CORS,cross_origin
import imghdr
import requests
import io
from google.cloud import vision
from google.oauth2 import service_account


with open(".\\models\\hope2.pkl","rb") as f:
     hope2_model=pickle.load(f)

# with open(".\\models\\hope3.pkl", 'rb') as file:
#     hope3 = pickle.load(file)

# Configure the Google Cloud Vision API client
# credentials = service_account.Credentials.from_service_account_file('spry-bus-377602-23f4eaa2bbc3.json')
# client = vision.ImageAnnotatorClient(credentials=credentials)


def hope2_preprocess(image_path):
    # Load the image
    image = cv2.imread(image_path)
    # Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    # Calculate the histogram of the image
    hist = cv2.calcHist([image],[0],None,[256],[0,256])
    # Find the threshold value using Otsu's method
    threshold_val, threshold_img = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    # Get the average brightness of the image
    brightness_val = cv2.mean(image)[0]
    # Get the contrast of the image
    contrast_val = cv2.Laplacian(gray, cv2.CV_64F).var()
    # Get the sharpness of the image
    kernel = np.array([[-1,-1,-1], [-1,9,-1], [-1,-1,-1]])
    sharpness_val = cv2.filter2D(gray, -1, kernel)
    # Get the noise of the image
    median = cv2.medianBlur(gray, 5)
    noise_val = np.mean((gray - median) ** 2)
    # Get the resolution of the image
    height, width = gray.shape[:2]
    resolution_val = height * width
    # Get the blurriness of the image
    blurriness_val = cv2.Laplacian(gray, cv2.CV_64F).var()
    # Return the features as a list
    return [brightness_val, threshold_val, contrast_val, np.mean(sharpness_val), noise_val, resolution_val, blurriness_val]

app = Flask(__name__)
CORS(app)
@app.route("/")
def home():
    return "working"

@app.route("/hope2",methods=["POST"])
def hope2():
    img = request.files['image']
    print(img)
    link = "temp."+imghdr.what(img)
    img.save(link)

    features=hope2_preprocess(link)
    example_measures=np.array([features])
    predict=hope2_model.predict(example_measures)
    # m=['Very Good','Good','Bad','Very Bad']
    value=predict[0]
    if(value==0): return "3"
    if(value==1): return "2"
    if(value==2): return "1"
    else: return "0"

# @app.route('/hope3', methods=['GET', 'POST'])
# def hope3():
#     if request.method == 'POST':
#         # Check if a file was uploaded
#         if 'file' not in request.files:
#             return jsonify({'error': 'No file uploaded'})
#         file = request.files['file']
#         if file.filename == '':
#             return jsonify({'error': 'No file uploaded'})
#         # Read the file and convert it to a numpy array
#         image = cv2.imdecode(np.fromstring(file.read(), np.uint8), cv2.IMREAD_GRAYSCALE)
#         # Resize the image and normalize the pixel values
#         image = cv2.resize(image, (100, 100))
#         image = image.astype('float32') / 255.0
#         # Reshape the image to match the input format of the model
#         image = image.reshape(1, 100, 100, 1)
#         # Make a prediction using the model
#         prediction = hope3.predict(image)
#         category = np.argmax(prediction)
#         categories = ['Bad_Images', 'Good_Images', 'Very_Bad_Images', 'Very_Good_Images']
#         category_name = categories[category]
#         # Use Google Cloud Vision to extract text from the image
#         image_bytes = io.BytesIO(file.read())
#         content = image_bytes.getvalue()
#         image = vision.Image(content=content)
#         response = client.text_detection(image=image)
#         if response.error.message:
#             return jsonify({'error': response.error.message})
#         text = response.text_annotations[0].description
#         # Render the template with the image and classification results

#         # return render_template('results.html', category=category_name, text=text)
#         if(category_name=="Very_Bad_Images"):  return 0
#         if(category_name=="Bad_Images"):  return 1
#         if(category_name=="Good_Images"):  return 2
#         else :  return 3
    
#     # return render_template('index.html')


app.run(debug=True)