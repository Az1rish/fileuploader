import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }
  
  render() {
    return (
      <main className='App'>
        <SearchBar />
        <FilterableList files={this.props.files} />
      </main>
    );
  }
}
