import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Topbar extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    
    renderHeader() {
        switch(this.props.auth){
            case null:
                return;
            case false:
                return
                        <React.Fragment>
                            <li><a>About Us</a></li>
                            <li><a>Connect To Vend</a></li>
                            <li><a href="/">Sign Up</a></li>
                            <li><a href="/auth/google">Login with Google</a></li>
                        </React.Fragment>;
            default:
                return;
        }
    }
    
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">Jobayo</a>
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

export default connect(mapStateToProps, actions)(Topbar);