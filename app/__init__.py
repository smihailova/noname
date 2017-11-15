from flask import Flask
from config import DevelopmentConfig
from app.models import db

POSTGRES = {
    'user': 'smihailova',
    'pw': '12345',
    'db': 'noname_db',
    'host': 'localhost',
    'port': '5432',
}

app = Flask(__name__)
app.config.from_object(DevelopmentConfig)
# app.config['DEBUG'] = True
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/noname_db'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:\%(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

from app import views
