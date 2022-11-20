from crypt import methods
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/", methods = ['POST', 'GET'])
def show_index():
    return render_template("index.html", visit_count=100)

@app.route("/tech", methods = ['POST', 'GET'])
def show_tech():
    print("Request")
    return render_template("tech.html")

@app.route("/hobbies", methods = ['POST', 'GET'])
def show_hobbies():
    return render_template("hobbies.html")


if __name__ == "__main__":
    app.run(debug=True)