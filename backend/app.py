import pandas as pd
from flask import Flask, request, jsonify
import joblib
from tensorflow.keras.metrics import MeanSquaredError
from tensorflow.keras.models import load_model
from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Enables CORS for all routes




@app.route('/predict', methods=['POST'])
def predict():
    # Custom objects mapping for model loading
    custom_objects = {
        'mse': MeanSquaredError(),
    }

    try:
        # Load the model with the custom object mapping
        model = load_model('car_price_model.h5', custom_objects=custom_objects)
        print("Model loaded successfully!")
    except Exception as e:
        print(f"Error loading model: {e}")


    try:
        preprocessor = joblib.load('cars_preprocessor.pkl')
        print("Preprocessor loaded successfully!")
    except Exception as e:
        print(f"Error loading preprocessor: {e}")
        preprocessor = None
    if model is None or preprocessor is None:
        return jsonify({'error': 'Model or preprocessor not loaded successfully'}), 500

    try:
        # Get input data from the request
        input_data = request.get_json(force=True)
        print(input_data)
        # Ensure input data is valid
        if not input_data:
            return jsonify({'error': 'No input data provided'}), 400
        
        # Convert the input data into a DataFrame
        input_df = pd.DataFrame(input_data)
        
        # Preprocess the input data
        input_transformed = preprocessor.transform(input_df)
        
        # Make prediction using the trained model
        prediction = model.predict(input_transformed)
        
        # Format the response
        response = {'predicted_price': float(prediction[0][0])}
        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/predict_house', methods=['POST'])
def predictHouse():
    # Custom objects mapping for model loading
    custom_objects = {
        'mse': MeanSquaredError(),
    }

    try:
        # Load the model with the custom object mapping
        model = load_model('house_price_model.h5', custom_objects=custom_objects)
        print("Model loaded successfully!")
    except Exception as e:
        print(f"Error loading model: {e}")


    try:
        preprocessor = joblib.load('houses_preprocessor.pkl')
        print("Preprocessor loaded successfully!")
    except Exception as e:
        print(f"Error loading preprocessor: {e}")
        preprocessor = None
    if model is None or preprocessor is None:
        return jsonify({'error': 'Model or preprocessor not loaded successfully'}), 500

    try:
        # Get input data from the request
        input_data = request.get_json(force=True)
        print(input_data)
        # Ensure input data is valid
        if not input_data:
            return jsonify({'error': 'No input data provided'}), 400
        
        # Convert the input data into a DataFrame
        input_df = pd.DataFrame(input_data)
        
        # Preprocess the input data
        input_transformed = preprocessor.transform(input_df)
        
        # Make prediction using the trained model
        prediction = model.predict(input_transformed)
        
        # Format the response
        response = {'predicted_price': float(prediction[0][0])}
        return jsonify(response)

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
