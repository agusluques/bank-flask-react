import os
from app.services import app, db
from app.routes import blueprint

from app.cards.models import Card
from app.transactions.models import Transaction
from app.accounts.models import Account

# Routes blueprint
app.register_blueprint(blueprint, url_prefix='/api')

db.create_all()