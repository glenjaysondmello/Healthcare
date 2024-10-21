from flask import Flask, request, jsonify, make_response
import joblib

app = Flask(__name__)

# Load the pre-trained model and vectorizer
vectorizer = joblib.load('vectorizer.joblib')
model = joblib.load('model.joblib')

@app.route('/healthbot', methods=['POST'])
def healthbot():
    # Get user input from the request
    data = request.json
    user_message = data.get('message', '')

    if not user_message:
        response = jsonify({'message': "Please provide a valid input."})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 400

    try:
        # Transform the user input using the vectorizer
        user_input_vector = vectorizer.transform([user_message])

        # Predict the response using the model
        predicted_response = model.predict(user_input_vector)[0]

        # Send the predicted response as a JSON object
        response = jsonify({'message': predicted_response})
        response.headers.add("Access-Control-Allow-Origin", "*")  # Add CORS header
        return response
    
    except Exception as e:
        # Handle any errors (e.g., input issues or prediction failure)
        response = jsonify({'message': f"An error occurred: {str(e)}"})
        response.headers.add("Access-Control-Allow-Origin", "*")  # Add CORS header
        return response, 500

@app.after_request
def add_cors_headers(response):
    """ Ensure CORS headers are added to every response. """
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
    return response

if __name__ == '__main__':
    app.run(debug=True, port=5001)
