import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ProductListView extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();

    }
    
    renderContent() {
        let productDetails = null;
        if (this.props.product.length === 0) {
            productDetails = null;
        }
        productDetails = (
            <div>
                {this.props.product.map(product => (
                <li key={product.productId}>{product.productName}</li>))}
            </div>
        
        );
        return productDetails;
        
    }
    
    render() {

        return (
            <div>
                <h3>Product List View</h3>
                {this.renderContent()}
            </div>
        )
    }
}

function mapStateToProps({ product }) {
    return { product };
}

export default connect(mapStateToProps, actions)(ProductListView);