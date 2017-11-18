import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar.react';


class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        Some content
      </div>
    )
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
