from werkzeug.exceptions import BadRequest
from app.services import db
from app.accounts.models import Account
#from app.transactions.models import Transaction
from sqlalchemy import func
from sqlalchemy.ext.hybrid import hybrid_property

class Card(db.Model):
    __tablename__ = 'card'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(20))
    account_id = db.Column(db.Integer, db.ForeignKey('account.id'))

    def is_valid(self):
        pass

    __mapper_args__ = {
        'polymorphic_on': type,
        'polymorphic_identity': 'card'
    }


class CreditCard(Card):
    max_credit = db.Column(db.Integer)

    __mapper_args__ = {
        'polymorphic_identity': 'credit'
    }

    @hybrid_property
    def transactions_sum(self):
        return sum(transaction.value for transaction in self.transactions)

    @transactions_sum.expression
    def transactions_sum(cls):
        return (
            select([func.sum(Transaction.value)]).
            where(Transaction.card_id == cls.id).
            label('transactions_sum')
        )

    def is_valid(self, value):
        credits_transactions = self.transactions_sum
        if self.max_credit - ((credits_transactions or 0) + value) < 0:
            return False
        return True


class DebitCard(Card):

    __mapper_args__ = {
        'polymorphic_identity': 'debit'
    }

    def is_valid(self, value):
        account = Account.query.get(self.account_id)
        if account.balance - value < 0:
            return False
        account.balance = account.balance - value
        db.session.add(account)
        return True
