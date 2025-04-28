import requests

url = "https://stephen-king-api.onrender.com/api/books"

response = requests.get(url)
data = response.json()
print(data['data'][0:2])