from flask import Flask, Response, jsonify
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

@app.route('/getTransactionDetails/<accountId>')
def trans(accountId):
    headers = {
    'identity': 'Group24',
    'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get(
        'http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/' + accountId + '?from=01-01-2018&to=02-01-2019',
        headers = headers)
    contents = r.json()
    Transport_amount = 0
    FNB_amount = 0
    Transfer_amount = 0
    for i in range(len(contents)):
        if contents[i]['tag'] == 'TRANSPORT':
            Transport_amount = Transport_amount + float(contents[i]['amount'])
        if contents[i]['tag'] == 'F&B':
            FNB_amount = FNB_amount + float(contents[i]['amount'])
        if contents[i]['tag'] == 'TRANSFER':
            Transfer_amount = Transfer_amount + float(contents[i]['amount'])

    print(Transport_amount)
    print(FNB_amount)
    print(Transfer_amount)

    test2 = {'TRANSPORT':Transport_amount, 'FNB': FNB_amount, 'TRANSFER': Transfer_amount }
    print(test2)

    return test2


@app.route('/getAccountlist/<customerId>')
def Accountlist(customerId):
    headers = {
    'identity': 'Group24',
    'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get(
      'http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/accounts/deposit/'+ customerId,
      headers = headers)
    return r.json()[0]

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

@app.route('/getMarketingMessage')
def market():
    headers = {
        'identity': 'Group24',
        'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/marketing',
                     headers = headers)
    return json.dumps(r.json())

@app.route('/marketingDetails/<marketingdetails>')
def marketingDetail(marketingdetails):
    headers = {
        'identity': 'Group24',
        'token': 'b8f08d3a-47b2-4238-86bf-a8ed776352c2'
    }
    r = requests.get('http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/marketing/' + marketingdetails,
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
