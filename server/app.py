from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__, template_folder="./client/dist", static_folder="./client/dist/assets")
CORS(app)

@app.route("/", defaults={"path": ""}, strict_slashes=False)
@app.route("/<path:path>")
def catch_all(path):
    # Handle the request for the undefined routes here
    return render_template("index.html") 

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
