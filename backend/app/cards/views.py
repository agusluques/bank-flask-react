from flask import Blueprint, jsonify

from app.routes import blueprint
from app.cards.models import Card
from app.cards.serializers import cards_schema

url_prefix = '/accounts/<int:account_id>/cards'

@blueprint.route(url_prefix + '/', methods=["GET"])
def get_all_cards(account_id):
    cards = Card.query.filter(Card.account_id == account_id)
    return jsonify(cards_schema.dump(cards))