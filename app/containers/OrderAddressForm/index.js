import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAddresses } from './actions';

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
        this.setState({ selectedAddress: address });
        // Pass the selected address to your order placement logic
        this.props.onAddressSelect(address);
    }

    render() {
        const { addresses, user } = this.props;
        const { selectedAddress } = this.state;

        return (
            <div className="address-form">
                <h2>Select a Shipping Address</h2>
                {addresses && addresses.length > 0 ? (
                    <ul>
                        {addresses.map((address) => (
                            <li key={address._id}
                                className={selectedAddress && selectedAddress._id === address._id ? 'selected' : ''}
                                onClick={() => this.handleAddressSelect(address)}>
                                <p>{address.address1}</p>
                                <p>{address.address2}</p>
                                <p>{address.city}, {address.state} {address.zipCode}</p>
                                <p>{address.country}</p>
                            </li>
                        ))}
                    </ul>
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
    user: PropTypes.object.isRequired,
    onAddressSelect: PropTypes.func
};

OrderAddressForm.defaultProps = {
    onAddressSelect: () => { }
};

const mapStateToProps = state => ({
    addresses: state.address.addresses
});

export default connect(mapStateToProps, { fetchAddresses })(OrderAddressForm);