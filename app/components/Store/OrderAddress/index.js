import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderAddressForm from '../../../containers/OrderAddressForm/index'

class OrderAddress extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div className="address-dashboard">
                <OrderAddressForm user={user} />
            </div>
        );
    }
}

OrderAddress.propTypes = {
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(OrderAddress)