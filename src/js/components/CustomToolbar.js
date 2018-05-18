import PropTypes from 'prop-types'
import React from 'react'
import cn from 'classnames'
import FontAwesome from 'react-fontawesome';

let navigate = {
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    TODAY: 'TODAY',
    DATE: 'DATE',
};


class CustomToolbar extends React.Component {
    static propTypes = {
      view: PropTypes.string.isRequired,
      views: PropTypes.arrayOf(PropTypes.string).isRequired,
      label: PropTypes.node.isRequired,
      messages: PropTypes.object,
      onNavigate: PropTypes.func.isRequired,
      onViewChange: PropTypes.func.isRequired,
    }
  
    render() {
      let { messages, label } = this.props
  
      return (
        <div className="rbc-toolbar">
          <span>
            <button
              onClick={this.navigate.bind(null, navigate.TODAY)}
            >
              {messages.today}
            </button>
            <button
              type="button"
              style={{
                  border: "none"
              }}
              onClick={this.navigate.bind(null, navigate.PREVIOUS)}
            >
            <FontAwesome name="chevron-left" />
            </button>
            <button
              type="button"
              style={{
                  border: "none"
              }}
              onClick={this.navigate.bind(null, navigate.NEXT)}
            >
            <FontAwesome name="chevron-right" />
            </button>
          </span>
  
          <span className="rbc-toolbar-label" style={{
              textAlign: "left"
          }}>{label}</span>
  
          <span className="rbc-btn-group">{this.viewNamesGroup(messages)}</span>
        </div>
      )
    }
  
    navigate = action => {
      this.props.onNavigate(action)
    }
  
    view = view => {
      this.props.onViewChange(view)
    }
  
    viewNamesGroup(messages) {
      let viewNames = this.props.views
      const view = this.props.view
  
      if (viewNames.length > 1) {
        return viewNames.map(name => (
          <button
            type="button"
            key={name}
            className={cn({ 'rbc-active': view === name })}
            onClick={this.view.bind(null, name)}
          >
            {messages[name]}
          </button>
        ))
      }
    }
  }
  
  export default CustomToolbar
  