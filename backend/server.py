from flask import Flask, request
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/a")
def a():
    f = open("data/data.json")

    data = json.load(f)
    return data


@app.route("/postData", methods=["POST"])
def handle_post():
    if request.method == "POST":
        data = request.get_json()

        with open("./data/data.json", "w") as file:
            json.dump(data, file)

        return "Success"


if __name__ == "__main__":
    app.run(debug=True)
