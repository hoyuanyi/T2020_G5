from flask import Flask 
import requests
import json

app = Flask(__name__)

@app.route('/getCustomerId/<name>')
def CustomerId(name):
    headers = {
    'identity': 'Group24',
    'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get(
      'http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/'+name,
      headers = headers)

    print(r.json()['customerId'])
    return r.json()

@app.route('/getCustomerDetails/<customerId>')
def CustomerDetails(customerId):
    headers = {
    'identity': 'Group24',
    'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get(
      'http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/customers/'+ customerId + '/details',
      headers = headers)
    return r.json()

@app.route('/getTransactionDetails/<details>')
def trans(details):
    headers = {
    'identity': 'Group24',
    'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get(
        'http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/' + details + '?from=01-01-2018&to=02-01-2019',
        headers = headers)
    return json.dumps(r.json())

@app.route('/getAccountlist/<customerId>')
def Accountlist(customerId):
    headers = {
    'identity': 'Group24',
    'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get(
      'http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/'+ customerId,
      headers = headers)
    return json.dumps(r.json())

@app.route('/getBalance/<accountId>')
def DepositBalance(accountId):
    headers = {
    'identity': 'Group24',
    'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get(
      'http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/'+ accountId +'/balance?month=1&year=2018',
      headers = headers)
    print(r.json())
    return r.json()

@app.route('/getCreditAccount/<customerId>')
def CreditAccountList(customerId):
    headers = {
    'identity': 'Group24',
    'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get(
      'http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/credit/'+ customerId,
      headers = headers)
  
    return json.dumps(r.json())

@app.route('/getOutstandingBalance/<accountId>')
def OutstandingBalance(accountId):
    headers = {
    'identity': 'Group24',
    'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get(
      'http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/credit/' + accountId + '/balance',
      headers = headers)
    print(r.json())
    return r.json()

@app.route('/getMarketingMessage/<marketingmsg>')
def market(marketingmsg):
    headers = {
        'identity': 'Group24',
        'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/marketing' + marketingmsg,
                     headers = headers)
    return json.dumps(r.json())

@app.route('/marketingDetails/<marketingdetails>')
def marketingDetail(marketingdetails):
    headers = {
        'identity': 'Group24',
        'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/marketing/id' + marketingdetails,
                     headers = headers)
    return json.dumps(r.json())


@app.route('/getPersonalMessage/<personalmsg>')
def personal(personalmsg):
    headers = {
        'identity': 'Group24',
        'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/message/' + personalmsg,
                     headers = headers)
    return json.dumps(r.json())
