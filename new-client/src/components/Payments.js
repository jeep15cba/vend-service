import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends React.Component {
    render() {
        return (
            <StripeCheckout 
                name="JOBAYO"
                description={this.props.description}
                currency="AUD"
                amount={this.props.amount}
                token={token => this.props.handleToken(token, this.props.amount, this.props.description, this.props.jobs)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="waves-effect waves-light btn">{this.props.buttonTitle}</button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);