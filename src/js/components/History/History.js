import React, { Component } from 'react'

export default class History extends Component {
  constructor(props){
    super(props);

  }
      render(){

        const { history, lat,lon } = this.props;

        return (
            <div className='col-md-6'>
              <div className="card border-info">
                <div className="card-header" id='header'>Search History</div>
                <div className="card-body">
                  <ul className="list-group list-group-flush full-width">
                    {history.map((search,index) => (
                      <li className="list-group-item" key={index}>
                        {search.city}
                        <p className='text-right'>{search.date}<br />{search.time}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
      
          );
    }
}
