function getPrediction() {
    var symbol = document.getElementById('symbol').value;
    
    fetch('http://localhost:5000/predict?symbol=' + symbol)
    .then(response => response.json())
    .then(data => {
        document.getElementById('prediction').innerHTML = data.prediction;
    })
    .catch(error => console.error('Error:', error));
}

from flask import Flask, request, jsonify
from flask_cors import CORS
# Your other imports, model code etc. here...

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['GET'])
def predict():
    symbol = request.args.get('symbol')
    # Run your model code here using symbol parameter and get a prediction
    prediction = ... # Replace with your model prediction code
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(port=5000)
