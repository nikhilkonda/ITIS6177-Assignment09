import json

def lambda_handler(event, context):
    keyword = event['queryStringParameters']['keyword']
    my_name = "ChatGPT"
    message = f"{my_name} says {keyword}"
    
    response = {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': json.dumps(message)
    }
    
    return response