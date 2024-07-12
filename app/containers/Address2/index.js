/*
 *
 * Cart
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

const Address2 = () => {
    return (
        <div>
            Address2 wat page
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, actions)(Address2);