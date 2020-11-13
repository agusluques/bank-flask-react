from app.services import db

class Transaction(db.Model):
    __tablename__ = 'transaction'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    value = db.Column(db.Integer)
    date_created  = db.Column(db.DateTime,  default=db.func.current_timestamp())

    card_id = db.Column(db.Integer, db.ForeignKey('card.id'))
    card = db.relationship('Card', backref="transactions")
    
    account_id = db.Column(db.Integer, db.ForeignKey('account.id'))
    account = db.relationship('Account', backref="transactions")

