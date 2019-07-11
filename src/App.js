import React, { Component, Fragment } from 'react';
import './App.css';
import AppItem from './AppItem';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello react',
      list: ['learn react', 'learn more react', 'learn js', 'learn more js'],
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  render() {
    const { inputValue } = this.state;

    return (
      <Fragment>
        <label htmlFor='inserAera'>输入内容：</label>
        <input
          id='inserAera'
          className='input'
          value={inputValue}
          onChange={this.handleInputChange}
        ></input>
        <button onClick={this.handleBtnClick}>确定</button>
        <ul>{this.getListItem()}</ul>
      </Fragment>
    );
  }

  getListItem() {
    const { list } = this.state;

    return list.map((value, index) => {
      return (
        <AppItem
          key={index}
          value={value}
          index={index}
          deleteItem={this.handleDeleteItem}
        ></AppItem>
      )
    })
  }

  handleInputChange(event) {
    const value = event.target.value;

    this.setState((state, props) => {
      return {
        inputValue: value,
      }
    });
  }

  handleBtnClick() {
    const { inputValue } = this.state;

    if (inputValue !== "" && inputValue !== undefined & inputValue != null &&
      (inputValue.length > 0 && inputValue.trim().length !== 0)) {
      this.setState((state, props) => {
        return {
          list: [...state.list, inputValue],
          inputValue: '',
        }
      });
    }
  }

  handleDeleteItem(index) {
    this.setState((state, props) => {
      const list = [...state.list];
      list.splice(index, 1);
      return {
        list: list
      }
    });
  }
}

export default App;
