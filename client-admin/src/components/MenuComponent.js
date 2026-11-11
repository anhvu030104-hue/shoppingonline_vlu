import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom'; // Phải import thư viện Link

class Menu extends Component {
  static contextType = MyContext;

  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
          <ul className="menu">
            {/* Bọc chữ vào trong thẻ Link để bấm được */}
            <li className="menu"><Link to='/admin/home'>Home</Link></li>
            <li className="menu"><Link to='/admin/category'>Category</Link></li>
            <li className="menu"><Link to='/admin/product'>Product</Link></li>
            <li className="menu"><Link to='/admin/order'>Order</Link></li>
            <li className="menu"><Link to="/admin/customer">Customer</Link>
</li>
          </ul>
        </div>
        <div className="float-right">
          Hello <b>{this.context.username}</b> | <span className="link" onClick={() => this.lnkLogoutClick()}>Logout</span>
        </div>
        <div className="float-clear" />
      </div>
    );
  }

  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}

export default Menu;