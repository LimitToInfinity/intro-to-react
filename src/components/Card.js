import React from 'react';

class Card extends React.Component {
  constructor(props) {  
    super(props);
  }
    
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src="http://www.sporcle.com/blog/wp-content/uploads/2018/10/1-48.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Question # {}</h5>
          <p className="card-text">Question: {}</p>
          <a href="#" className="btn btn-primary">Show Answer</a>
        </div>
      </div>
    );
  }
}
  
  export default Card;
  