import React, { Component } from 'react';
import PropTypes from 'prop-types';
import actions from '../../actions';
import { connect } from 'react-redux';
import { fetchAddresses } from './actions';
import Button from '../../components/Common/Button';
import { setSelectedAddress } from '../Order/actions';
class OrderAddressForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAddress: null
        };
    }

    componentDidMount() {
        this.props.fetchAddresses();
    }

    handleAddressSelect = (address) => {
        console.log("What is this")
        this.setState({ selectedAddress: address });
        console.log(this.props, "this.props")
        this.props.setSelectedAddress(address);
        // Pass the selected address to your order placement logic
        this.props.onAddressSelect(address);
    }

    handleNext = () => {
        // Handle the "Next" button click here
        console.log('Next button clicked');
        this.props.placeOrder();
    }


    render() {
        const { addresses } = this.props;
        const { selectedAddress } = this.state;

        return (
            <div className="address-form">
                <h2>Select a Shipping Address</h2>
                {addresses && addresses.length > 0 ? (
                    <div>
                        {addresses.map((address) => (
                            <div key={address._id}
                                style={{ marginBottom: '10px', display: 'flex', verticallAlign: 'top', borderBotton: '1px solid #ccc' }}
                            >
                                <input
                                    type="radio"
                                    checked={selectedAddress ? selectedAddress._id === address._id : false}
                                    onChange={() => this.handleAddressSelect(address)}
                                    style={{ padding: '10px' }}
                                />
                                <div
                                    className={selectedAddress && selectedAddress._id === address._id ? 'selected' : ''}
                                    onClick={() => this.handleAddressSelect(address)}
                                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                                >
                                    <p>{address.address}</p>
                                    <p>{address.city}, {address.state}, {address.zipCode}, {address.country}</p>
                                </div>
                            </div>
                        ))}
                        <Button variant='primary' onClick={this.handleNext}
                            text="Next Payment"
                        >Next</Button>
                    </div>
                ) : (
                    <p>No addresses found. Please add an address.</p>
                )}
            </div>
        );
    }
}

OrderAddressForm.propTypes = {
    fetchAddresses: PropTypes.func.isRequired,
    addresses: PropTypes.array.isRequired,
    // user: PropTypes.object.isRequired,
    onAddressSelect: PropTypes.func
};

OrderAddressForm.defaultProps = {
    onAddressSelect: () => { }
};

const mapStateToProps = state => ({
    addresses: state.address.addresses,
    selectedAddress: state.order.selectedAddress
});

export default connect(mapStateToProps, actions)(OrderAddressForm);