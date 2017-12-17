from flask_login import LoginManager, login_required, login_user, logout_user, current_user
from flask import render_template
from werkzeug.utils import redirect

from app import app
from app.users.forms import UserForm
from app.models import User


login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)


@app.route('/')
@login_required
def home():
    return render_template('home.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = UserForm()
    # if form.validate_on_submit():
    #     login_user(load_user)
    #
    #     return redirect(home)
    # return render_template('login.html', form=form)
    return render_template('home.html', form=form)


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = UserForm()
    # if form.validate_on_submit():
    #     login_user(load_user)
    #
    #     return redirect(home)
    # return render_template('login.html', form=form)
    return render_template('home.html', form=form)


@app.route('/user/id/<int:user_id>')
def profile(user_id):
    pass


@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(login)
