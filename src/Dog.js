import React from 'react';
import './Dog.css';

const Dog = (props) => {
    return (
        <div className="bg">
  <div id="dog">
    <div className="head">
      <div className="mask mask-head">
         <div className="nose"></div>
        <div className="eye"></div>
      </div>
     <div className="ear"></div>
    </div>
      
    <div className="body">
      <div className="shirt"></div>
      <div className="mask-body">
        <div className="leg"></div>
      </div>
      <div className="foot"></div>
    </div>
    <div className="back-body">
      <div className="mask-back-body"></div>
    </div>
    <div className="mask-tail"></div>
    </div>

<div className="spinner">
  <div className="bounce1"></div>
  <div className="bounce2"></div>
  <div className="bounce3"></div>
</div>

  </div>

    )
}

export default Dog;