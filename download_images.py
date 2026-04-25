import urllib.request
import json
import os

dishes = {
    "rondon": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Run_down_%28stew%29.jpg",
    "cangrejo_negro": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Crab_dish.jpg", # Placeholder, let's find a better one if possible. Or we can just use search.
    "ceviche_caracol": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Conch_salad_in_the_Bahamas.jpg",
    "ackee_saltfish": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Ackee_and_saltfish.jpg"
}

os.makedirs("/Users/cesarandresjimenezarci/Documents/sie miguel/public/images/comida", exist_ok=True)

for name, url in dishes.items():
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            with open(f"/Users/cesarandresjimenezarci/Documents/sie miguel/public/images/comida/{name}.jpg", "wb") as f:
                f.write(response.read())
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
