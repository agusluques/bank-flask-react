from app.services import ma
from app.accounts.models import Account

class AccountSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Account
        include_fk = True
        load_instance = True

account_schema = AccountSchema()
