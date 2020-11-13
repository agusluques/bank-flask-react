from app.services import ma
from flask_marshmallow import fields
from app.transactions.models import Transaction
from app.cards.serializers import CardSchema

class TransactionSchema(ma.SQLAlchemyAutoSchema):
    card_type = ma.Method("get_card_type", dump_only=True)
    card_id = ma.Integer(load_only=True)

    class Meta:
        model = Transaction
        include_fk = True
        load_instance = True
    
    def get_card_type(self, transaction):
        return transaction.card.type

transaction_schema = TransactionSchema()
transactions_schema = TransactionSchema(many=True)

