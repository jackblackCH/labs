import React, {Component} from 'react';

function WithItems(WrappedComponent) {
  return class PP extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: 'Please add',
        items: props.items
      }
    }

    addItem(ev) {
      ev.preventDefault();
      const newItem = {
        text: this.state.inputValue,
        checked: true
      }
      this.setState({
        items: [...this.state.items, ...[newItem]]
      })
    }

    updateInputValue(ev) {
      this.setState({
        inputValue: ev.target.value
      })
    }

    render() {
      const newProps = {
        addItem: this.addItem.bind(this),
        inputValue: this.state.inputValue,
        updateInputValue: this.updateInputValue.bind(this),
        items: this.state.items
      }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}

export default WithItems;
