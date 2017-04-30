import React from 'react'

class Nav extends React.Component {
  render() {
    let header = this.props.header

    return (
      <nav className="navbar navbar-default navigation-clean">
        <div className="container">
          <div className="navbar-header"><a href="#" className="navbar-brand navbar-link">Shopping </a>
            <button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggle collapsed"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button>
          </div>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav navbar-right">
              <li role="presentation" className="active"><a href="#">Home </a></li>
              <li role="presentation"><a href="#">Juice Cart ({header.juice_cart})</a></li>
              <li role="presentation"><a href="#">Cart ({header.total_cart})</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
