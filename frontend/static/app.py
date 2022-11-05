"""Sample Flask app."""


from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    """
    yes.
    """
    return '<p>Hello, World</p>'


hello_world()
