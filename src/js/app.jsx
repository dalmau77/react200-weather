import React from 'react';
import City from './components/City';
import History from './components/History';
import Header from './components/Header/header';
import Search from './components/Search';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-flex'>
        <Header/>
        <Search/>
        <div className='row'>
        <div className='col-lg'>
        <City/>
        </div>
        <div className='col-lg'>
        <History/>
      </div>
      </div>
      </div>
      
    );
  }
}
