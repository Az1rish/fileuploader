import React, { Component } from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

export default class SearchBar extends Component {
    render() {
        return (
            <div className='SearchBar'>
                <div className='Searchbar__heading'>
                    <h1>File Uploader</h1>
                </div>
                <div className='Searchbar__controls'>
                    <SearchBox />
                    <FilterOptions />
                </div>
            </div>
        );
    }
}