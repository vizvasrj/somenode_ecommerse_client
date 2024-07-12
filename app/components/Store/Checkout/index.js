import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAddresses } from '../../../containers/Address/actions';
import Button from '../../Common/Button';
import AddressForm from '../OrderAddress';
import { useHistory } from 'react-router-dom';

const Checkout = props => {
    const { authenticated, handleShopping, handleCheckout, placeOrder, fetchAddresses } = props;
    const [selectedAddress, setSelectedAddress] = useState(null);
    // const [showAddressForm, setShowAddressForm] = useState(true);
    const history = useHistory();

    useEffect(() => {
        // someFunctionToTest();
        fetchAddresses();
        // console.log('fetching addresses', someFunctionToTest);
    }, [fetchAddresses]);

    // const handleAddressSelect = (address) => {
    //     setSelectedAddress(address);
    // };

    const handlePlaceOrder = () => {
        history.push('/cart/address');
        // if (selectedAddress) {
        //     placeOrder(selectedAddress);
        // } else {
        //     alert('Please select an address before placing your order');
        // }
    }

    return (
        <div className='easy-checkout'>

            <div className='checkout-actions'>
                <Button
                    variant='primary'
                    text='Continue shopping'
                    onClick={() => handleShopping()}
                />
                {authenticated ? (
                    <Button
                        variant='primary'
                        text='Place Order'
                        onClick={handlePlaceOrder}
                    />
                ) : (
                    <Button
                        variant='primary'
                        text='Proceed To Checkout'
                        onClick={() => handleCheckout()}
                    />
                )}
            </div>

        </div>
    );
};

const mapStateToProps = state => {
    return {
        addresses: state.address.addresses
    };
};

export default connect(mapStateToProps, { fetchAddresses })(Checkout);