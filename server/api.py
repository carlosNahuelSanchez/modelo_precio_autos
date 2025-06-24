from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

# Cargar modelo
model = joblib.load("train/modelo_regresion_lineal_autos.joblib")

# Crear app Flask
app = Flask(__name__)
CORS(app)  # Habilita peticiones desde otro puerto (como React)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()  # Recibimos JSON del frontend
    df = pd.DataFrame([data])  # Lo convertimos en DataFrame

    # Realizamos predicción
    prediction = model.predict(df)

    return jsonify({'precio_estimado': round(float(prediction[0]), 2)})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
