from app.services import db

class Account(db.Model):
    __tablename__ = 'account'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    balance = db.Column(db.Integer)
    #transactions = db.relationship("Transaction")
