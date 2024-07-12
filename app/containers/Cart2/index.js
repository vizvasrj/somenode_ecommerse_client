import React from 'react';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Page404 from '../../components/Common/Page404';

import Address2 from '../Address2';
import Cart from '../Cart';

class Cart2 extends React.PureComponent {
    componentDidMount() {
        document.body.classList.add('cart-page');
    }

    componentWillUnmount() {
        document.body.classList.remove('cart-page');
    }

    render() {
        return (
            <div className='cart'>

                <Switch>
                    <Route path='/' component={Address2} />
                    <Route path='/c' component={Cart} />
                    <Route path="*" component={Page404} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.account.user,
        isLogged: state.account.isLogged,
        cart: state.cart.cart,

    }
}

export default connect(mapStateToProps, actions)(Cart2);