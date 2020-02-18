import React from 'react';

import Aux from '../../hoc/hoc';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css'

const Modal = props => {
    return (
        <Aux>
            <Backdrop hide={props.hide} />
            <div className={`Modal  ${props.className}`}></div>
        </Aux>
    )
}

export default Modal;