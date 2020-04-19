import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Header extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    
    renderHeader() {
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <React.Fragment>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Connect To Vend</a></li>
                            <li><a href="/">Sign Up</a></li>
                            <li><a href="/auth/google">Login with Google</a></li>
                        </React.Fragment>;;
            default:
                return <React.Fragment>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/customers">Customers</Link></li>
                            <li><Link to="/inventory">Products</Link></li>
                            <li><Link to="/joblist">Jobs</Link></li>
                            <li>You have {this.props.auth.credits} Jobs Left</li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><a href="api/logout">Logout</a></li>
                        </React.Fragment>;
        }
    }
    
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth ? '/dashboard' : '/'}
                        className="left brand-logo"
                        style={{ margin: '0px 0px 0px 20px' }}
                    >
                        Jobayo
                    </Link>
                    <ul className="right">
                        {this.renderHeader()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(Header);