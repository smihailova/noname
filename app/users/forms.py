# from flask_wtf import Form
# from wtforms import StringField, PasswordField
# from wtforms.validators import DataRequired, EqualTo
#
#
# class LoginForm(Form):
#     username = StringField('Username', validators=[DataRequired()])
#     password = PasswordField('Password', validators=[DataRequired()])
#
#
# class RegistrationForm(LoginForm):
#     password_repeat = PasswordField('Repeat password', validators=[DataRequired(), EqualTo('password')])

from wtforms_alchemy import ModelForm
from app.models import User


class UserForm(ModelForm):
    class Meta:
        model = User
