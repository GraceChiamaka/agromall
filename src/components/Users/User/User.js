import React, {useState} from 'react';
import './User.css';
import Modal from '../../Modal/Modal';

const User = props => {
    const [showModal, setshowModal]  = useState(false);
    const showUserData = () => {
        setshowModal(true);
        props.onClick(props)
    }
    return (
        <div className="User col-lg-4">
            <div className="card UserCard">
                <img src={`${props.imageURL + props.photo}`} className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title" onClick={showUserData}>{props.firstName+ ' '+ props.middleName+ ' '+ props.lastName}</h3>
                    <p>{props.sex}</p>
                </div>
                
            </div>
        </div>
    )
}
export default User;