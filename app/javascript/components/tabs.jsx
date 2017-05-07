import React from 'react'

class Pane extends React.Component {
  render() {
    return (
      <div role="tabpanel" className="tab-pane active" id="tab-1">
        {this.props.children}
      </div>
    );
  }
}

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selected: this.props.selected || 0}
    this.tabNav = this.tabNav.bind(this)
  }

  handleClick(index, preventDefault, event){
    if (preventDefault) {
      event.preventDefault();
    }

    this.setState({
      selected: index
    });
  }

  tabNav(){
    let labels = (child, index) => {
      let activeClass = (this.state.selected === index ? 'active' : '')
      let preventDefault = !child.props.href
      let href = child.props.href || '#'
      let remote = child.props['data-bz-remote']
      let pushState = child.props['data-bz-push-state']
      let classNameForTutorial;
      if (child.props.label == "Resources") {
        classNameForTutorial = "circle1"
      }
      return(
        <li key={index} className={activeClass}>
          <a
            href={href}
            className={classNameForTutorial}
            data-bz-remote={remote}
            data-bz-push-state={pushState}
            role="tab"
            onClick={this.handleClick.bind(this, index, preventDefault)}
          >
            {child.props.label}
          </a>
        </li>
      )
    }

    return (
      <ul className="nav nav-tabs">
        {this.props.children.map(labels.bind(this))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.tabNav()}
        <div className="tab-content">
          {this.props.children[this.state.selected]}
        </div>
      </div>
    )
  }
}

export {Tabs, Pane}

