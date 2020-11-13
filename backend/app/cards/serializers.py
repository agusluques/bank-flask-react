from app.services import ma
from app.cards.models import Card

class CardSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Card
        include_fk = True
        load_instance = True

cards_schema = CardSchema(many=True)
