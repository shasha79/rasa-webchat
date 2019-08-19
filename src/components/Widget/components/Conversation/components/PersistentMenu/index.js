import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


class PersistentMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isVisible: false
      };
    }
  
    _handleClick(e) {
      e.preventDefault();
      this.setState({
        isVisible: !this.state.isVisible
      });
    }
    
    renderDropdown(){
      return(
        <ul className="persistent-menu">
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">JavaScript</a></li>
        </ul>
      );
    }
  
    render() {
      return (
        <div className="persistent-menu-container">
          { this.state.isVisible ? this.renderDropdown() : null }
          <button className="persistent-menu-button" type="button" onClick={(e)=>this._handleClick(e)} tabindex="1" onFocus={(e)=>this._handleClick(e)}>&#9776;
          <span className="caret"></span></button>
        </div>
      );
    }
  }
 
export default PersistentMenu;
