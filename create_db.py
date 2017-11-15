#!flask/bin/python
from app.models import db
from app import app

db.create_all(app=app)
