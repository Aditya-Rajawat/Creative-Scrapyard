from flask import Flask
from fetech_data import findd
from bson import json_util
from flask_cors import CORS
import json
app = Flask(__name__)
CORS(app)
@app.route('/api/', methods = ['GET'])
def home():
    # print(findd())
    return json.loads(json_util.dumps(findd()))
    
app.run(port=8000, debug=True)

