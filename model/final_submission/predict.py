import tensorflow as tf
from flask import Flask, jsonify, request
from tensorflow.keras import models, layers
import os
from PIL import Image
import numpy as np

app = Flask(__name__)
app.secret_key = "asffasfagfaefkejfewhfiuehfoiejfij"


class_names = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy', 'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy', 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_', 'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot', 'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy', 'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy', 'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy', 'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy', 'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold', 'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy']
resize_and_rescale = tf.keras.Sequential([layers.experimental.preprocessing.Resizing(256, 256),layers.experimental.preprocessing.Rescaling(1./255)])

@app.route('/detect', methods=['POST'])
def upload_file():
	if request.method == 'POST':
		file = request.files.get('file')
		model = tf.keras.models.load_model("model.h5")
		file.save(f'UPLOAD_FOLDER/{file.filename}')
		img = Image.open(f'UPLOAD_FOLDER/{file.filename}')
		img_tensor = tf.convert_to_tensor(np.array(img))
		prediction = class_names[model.predict(resize_and_rescale(tf.expand_dims(img_tensor, 0))).argmax()]
		dir = 'UPLOAD_FOLDER/'
		for f in os.listdir(dir):
			os.remove(os.path.join(dir, f))
		result = {'prediction': prediction}
		return result

	elif request.method == "GET":
		return "PLEASE SEND IMAGE"
	else:
		return "BAD REQUEST"

if __name__ == "__main__":
	app.run(host='0.0.0.0',debug=True)




