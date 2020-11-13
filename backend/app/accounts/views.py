from flask import jsonify
from app.routes import blueprint
from app.accounts.models import Account
from app.accounts.serializers import account_schema

@blueprint.route('/accounts/<int:account_id>/')
def get_account_by_id(account_id):
    account = Account.query.get_or_404(account_id)
    return jsonify(account_schema.dump(account))