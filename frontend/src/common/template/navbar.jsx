import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../auth/authActions";
import imge from "../images/users.png";
// import img2 from "../images/Imagem.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  changeOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { name, email } = this.props.user;
    return (
      <div className='navbar-custom-menu'>
        <ul className='nav navbar-nav'>
          <li
            onMouseLeave={() => this.changeOpen()}
            className={`dropdown user user-menu ${
              this.state.open ? "open" : ""
            }`}
          >
            <a
            // eslint-disable-next-line
              href='javascript:;'
              onClick={() => this.changeOpen()}
              aria-expanded={this.state.open ? "true" : "false"}
              className='dropdown-toggle'
              // eslint-disable-next-line
              data-toggle='dropdown'
            >
              <img
                src={imge}
                className='user-image'
                alt='User Image'
                // eslint-disable-next-line
              />
              <span className='hidden-xs'>{name}</span>
            </a>
            {/* // eslint-disable-next-line */}
            <ul className='dropdown-menu'>
              <li className='user-header'>
                <img src={imge} className='img-circle' alt='User Image' />
                <p>
                  {name}
                  <small>{email}</small>
                </p>
              </li>
              <li className='user-footer div-nav'>
                <div className='pull-right'>
                  <a
                    onClick={this.props.logout}
                    className='btn btn-danger sair'
                  >
                    Sair
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
