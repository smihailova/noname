import React from 'react';

const navBarStyle = {
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '10px',
  paddingRight: '10px',
  textTransform: 'uppercase',
  marginBottom: '10px',
  borderBottom: '1px solid #c5c5c5',
};

const nameStyle = {
  fontWeight: 'bold',
  color: '#676767',
  display: 'inline-block',
  marginBottom: 0,
  paddingLeft: '10px',
  paddingRight: '10px',
};

const profileMenuStyle = {
  cursor: 'pointer',
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profileMenuOpen: false,
    }

    this.onProfileMenuToggle = this.onProfileMenuToggle.bind(this);
  }

  onProfileMenuToggle() {
    this.setState({ profileMenuOpen: !this.state.profileMenuOpen });
  }

  get profileMenu() {
    if (!this.state.profileMenuOpen) {
      return (
        <span style={ profileMenuStyle } onClick={ this.onProfileMenuToggle }>
          <img src='app/static/images/profile_picture.png' />
        </span>
      )
    }

    return (
      <span style={ profileMenuStyle } onClick={ this.onProfileMenuToggle }>
        <img src='app/static/images/profile_picture.png' />
      </span>
    )
  }

  render() {
    return (
      <div style={ navBarStyle }>
        { this.profileMenu }
        <h3 style={ nameStyle }>Noname </h3>
      </div>
    );
  }
}

export default NavBar;
