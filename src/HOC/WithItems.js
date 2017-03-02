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

    setCheckedState(ev) {
      const adaptedItems = this.state.items.reduce( (item, index) => {
        if ( index === parseInt(ev.target.id, 10) ) {
            item.checked = !item.checked;
            console.log('set state', item, index);
            return item;
        }
      });

      this.setState({
        items: [...this.state.items, ...[adaptedItems]]
      })
    }

    render() {
      const newProps = {
        addItem: this.addItem.bind(this),
        inputValue: this.state.inputValue,
        items: this.state.items,
        updateItem: this.setCheckedState.bind(this),
        updateInputValue: this.updateInputValue.bind(this)
      }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}

export default WithItems;
