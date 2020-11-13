import os
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)

# CORS
CORS(app)

# Configurations
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

# ORM for dummy db 
db = SQLAlchemy(app)

# Marshmallow
ma = Marshmallow(app)

@app.route("/routes")
def site_map():
    links = []
    for rule in app.url_map._rules:
        links.append({'url': rule.rule, 'methods': str(rule.methods), 'view': rule.endpoint})
    return jsonify(links), 200

