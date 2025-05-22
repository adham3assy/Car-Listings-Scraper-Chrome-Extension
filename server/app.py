from flask import Flask, request, jsonify
from send_to_telegram import post_car_to_telegram
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/api/send-to-telegram', methods=['POST'])
def send_to_telegram():
    cars = request.json.get('cars', [])
    for car in cars:
        post_car_to_telegram(car)
    return jsonify({'status': 'sent'}), 200

if __name__ == '__main__':
    app.run(port=5000)
