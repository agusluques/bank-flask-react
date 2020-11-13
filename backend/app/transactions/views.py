from flask import Blueprint, jsonify, request
from sqlalchemy import func
from app.services import db
from app.routes import blueprint

from app.transactions.models import Transaction
from app.transactions.serializers import (transaction_schema,
                                          transactions_schema)
from app.cards.models import Card
from app.accounts.models import Account

url_prefix='/accounts/<int:account_id>/transactions'

@blueprint.route(url_prefix + '/', methods=["GET"])
def get_all_transactions(account_id):
    transactions = Transaction.query.filter_by(account_id=account_id).order_by(Transaction.date_created.desc())
    return jsonify(transactions_schema.dump(transactions))

@blueprint.route(url_prefix + '/', methods=["POST"])
def create_transaction(account_id):
    json_input = request.get_json()
    try:
        transaction = transaction_schema.load(json_input)
    except Exception as err:
        return {"errors": err.messages}, 400
    

    account = Account.query.get_or_404(account_id)
    transaction.account_id = account.id

    card = Card.query.get_or_404(transaction.card_id)
    if not card.is_valid(transaction.value):
        return {"errors": "No funds!"}, 400
    
    db.session.add(transaction)    
    db.session.commit()
    return jsonify(transaction_schema.dump(transaction))