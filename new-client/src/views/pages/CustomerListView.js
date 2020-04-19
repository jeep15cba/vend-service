import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class CustomerListView extends React.Component {
    componentDidMount() {
        this.props.fetchCustomers();

    }
    
    renderContent() {
        let customerDetails = null;
        if (this.props.customer.length === 0) {
            customerDetails = null;
        }
        customerDetails = (
            <div>
                {this.props.customer.map(customer => (
                <li key={customer.customerId}>{customer.customerFirstName} {customer.customerLastName} | {customer.customerEmail}</li>))}
            </div>
        
        );
        return customerDetails;
        
    }
    
    render() {
        return (
            <div>
                <h3>Customer List View</h3>
                {this.renderContent()}
            </div>
        )
    }
}

function mapStateToProps({ customer }) {
    return { customer };
}

export default connect(mapStateToProps, actions)(CustomerListView);