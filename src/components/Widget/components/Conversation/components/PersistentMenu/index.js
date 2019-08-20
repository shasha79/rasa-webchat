import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';


class PersistentMenu extends React.Component {
    constructor(props) {
      console.log("PersistentMenu PM Initi: " + JSON.stringify(props));
  
      super(props);
      console.log("PersistentMenu PM Init After: " + JSON.stringify(this.props));
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
        {
            Object.keys(this.props.items).map((item, id) => 
                <li><a href={"" + this.props.items[item]}>{item}</a></li>)
        }
        </ul>
      );
    }
  
    render() {
        {console.log("PersistentMenu PM: " + JSON.stringify(this.props));}
       return (
        <div className="persistent-menu-container">
          { this.state.isVisible ? this.renderDropdown() : null }
          <button className="persistent-menu-button" type="button" onClick={(e)=>this._handleClick(e)} tabindex="1" onFocus={(e)=>this._handleClick(e)}>&#9776;
          <span className="caret"></span></button>
        </div>
      );
    }
  }

PersistentMenu.propTypes = { 
  items: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
};

/*export default connect(store => ({
    items: store.items
  }))(PersistentMenu); */
export default PersistentMenu;  
