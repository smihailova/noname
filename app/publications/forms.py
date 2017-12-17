# from flask_wtf import Form
# from wtforms import StringField, TextAreaField, SelectField
# from wtforms.validators import DataRequired
#
#
# class CreationForm(Form):
#     topic = SelectField('Topic', validators=[DataRequired()])
#     title = StringField('Title', validators=[DataRequired()])
#     text = TextAreaField('Text', validators=[DataRequired()])


from wtforms_alchemy import ModelForm
from app.models import Publication


class PublicationForm(ModelForm):
    class Meta:
        model = Publication
