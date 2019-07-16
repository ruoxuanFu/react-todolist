import React, { Component, Fragment } from 'react';
import './App.css';
import AppItem from './AppItem';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello react',
      list: ['learn react', 'learn more react', 'learn js', 'learn more js'],
    }
  }

  componentDidMount() {
    axios.get('https://www.easy-mock.com/mock/5d2d33d29a62296ff406ecf6/reacttest/api/v1/todolist')
      .then((response) => {
        this.setState((state, props) => ({
          list: [...state.list, ...response.data]
        }));
      })
      .catch(() => {
        console.log('axios error');
      })
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
          ref={(input) => { this.input = input }}
        ></input>
        <button onClick={this.handleBtnClick}>确定</button>
        <ul
          ref={(ul) => { this.ul = ul }}
        >{this.getListItem()}</ul>
      </Fragment>
    );
  }

  getListItem = () => {
    const { list } = this.state;

    return list.map((value, index) => ((
      <AppItem
        key={index}
        value={value}
        index={index}
        deleteItem={this.handleDeleteItem}
      ></AppItem>
    )))
  }

  handleInputChange = () => {
    const value = this.input.value;

    this.setState((state, props) => ({
      inputValue: value,
    }));
  }

  handleBtnClick = () => {
    const { inputValue } = this.state;

    if (inputValue !== "" && inputValue !== undefined & inputValue != null &&
      (inputValue.length > 0 && inputValue.trim().length !== 0)) {
      this.setState((state, props) => ({
        list: [...state.list, inputValue],
        inputValue: '',
      }), () => {
        console.log(this.ul.querySelectorAll('div'));
      });
    }
  }

  handleDeleteItem = (index) => {
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
