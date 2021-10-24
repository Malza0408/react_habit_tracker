import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    console.log('navbar!!');
    return (
      <nav className="navbar">
        <span className="navbar__logo"><i className="fas fa-leaf"></i></span>
        <span className="navbar__title">Habit Tracker</span>
        <span className="navbar__totalCount">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;