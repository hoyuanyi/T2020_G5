from flask import Flask 
import requests

app = Flask(__name__)

@app.route('/getCustomerId/<name>')
def index(name):
    headers = {
    'identity': 'Group24',
    'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get(
      'http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/'+name,
      headers = headers)
    return r.json()

@app.route('/hello')
def hello():
    return 'Hello, World'
