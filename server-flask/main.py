from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Hello, Flask!"
@app.route('/api/users')
def get_users():
    return {"users": [
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"},
        {"id": 3, "name": "Charlie"}
        ]
    }

if __name__ == '__main__':
    app.run(debug=True)
