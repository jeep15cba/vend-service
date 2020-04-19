import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Payments from '../../components/Payments';

class Pricing extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    
    renderContent() {
        if (!this.props.auth) {
            return;
        } switch(this.props.auth.credits){
            case 0:
                return <h4>You 0 jobs remaining, please purchase more below</h4>;
            default:
                return <h4>You still have {this.props.auth.credits} remaining</h4>;
        } 
    }
    
    render() {
        return (
            <div className="row">
                <h1>Pricing</h1>
                {this.renderContent()}
                <div className="col s6">   
                        <div className="card horizontal">
                          <div className="card-image">
                            <img src="https://lorempixel.com/100/190/nature/6" alt="jobayo" />
                          </div>
                          <div className="card-stacked">
                            <div className="card-content">
                              <p>Simple pricing, $49 for 10 Jobs.</p>
                            </div>
                            <div className="card-action">
                                <Payments amount={4900} description="$49 for 10 Jobs" buttonTitle="Buy 10 Jobs Now" jobs={10} />                                
                            </div>
                          </div>
                        </div>
                </div>
                <div className="col s6">
                        <div className="card horizontal">
                          <div className="card-image">
                            <img src="https://lorempixel.com/100/190/nature/6" alt="jobayo" />
                          </div>
                          <div className="card-stacked">
                            <div className="card-content">
                              <p>Simple pricing, $100 for 50 Jobs.</p>
                            </div>
                            <div className="card-action">
                                <Payments amount={10000} description="$100 for 50 Jobs"  buttonTitle="Buy 50 Jobs Now" jobs={50} />
                            </div>
                          </div>
                        </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(Pricing);