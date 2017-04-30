import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <div role="tabpanel" className="tab-pane active" id="tab-1">
        {this.props.children}
      </div>
    );
  }
}

export default Nav;
