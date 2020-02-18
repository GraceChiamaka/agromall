import React, { Component } from 'react';
import axios from 'axios';

import Modal from '../Modal/Modal';
import User from './User/User';

class Users extends Component {
    state = {
        userList: null,
        userImageBaseUrl: '',
        statusMessage: '',
        showModal: false,
        singleUserData: null
    }
    componentDidMount() {
        this.getUserList();
    }
    getUserList = () => {
        const URL = `https://theagromall.com/api/v2/get-sample-farmers?limit=10`;
        axios.get(URL)
            .then(res => {
                console.log(res.data.data)
                if (res.status === 200 && res.statusText === 'OK') {
                    this.setState({ userList: res.data.data.farmers, userImageBaseUrl: res.data.data.imageBaseUrl })
                }
                else {
                    console.log('error getting users')
                }
            })
            .catch((err) => {
                throw err.message;
                if (err) {
                    console.log('unable to get users')
                }
            })
    }


    displayUsers = () => {
        if (this.state.userList === null) {
            return <h3>No Users Found!</h3>
        } else {
            return this.state.userList.map((users) => {
                return <User
                    key={users.farmer_id}
                    userId={users.farmer_id}
                    firstName={users.first_name}
                    middleName={users.middle_name}
                    lastName={users.surname}
                    sex={users.gender}
                    reg={users.reg_no}
                    bvn={users.bvn}
                    birth={users.dob}
                    maritalStatus={users.marital_status}
                    spouse={users.spouse_name}
                    address={users.address}
                    city={users.city}
                    lga={users.lga}
                    state={users.state}
                    phoneNumber={users.mobile_no}
                    email={users.email_address}
                    idType={users.id_type}
                    idNo={users.id_no}
                    job={users.occupation}
                    nationality={users.nationality}
                    id={users.id_image}
                    photo={users.passport_photo}
                    imageURL={this.state.userImageBaseUrl}
                    onClick={this.showUserModal}
                    issueDate={users.issue_date}
                    expiryDate={users.expiry_date}
                    print={users.fingerprint}
                />
            })
        }
    }
    showUserModal = (data) => {
        console.log('you clicked a user', data);
        this.setState({  singleUserData: [this.state.singleUserData, ...data], showModal: true }) 
    }
    hideModal = () => {
        this.setState({ showModal: false })
    }
    showSingleUser = () => {
        console.log(this.state.singleUserData)
        if (this.state.singleUserData === null) {
            return <h3>No User Data!</h3>
        } else {
            return this.state.singleUserData.map((data) => {
                console.log(data);
                return <div>
                    <p>data</p>
                </div>
            })
        }
    }
    render() {
        return (
            <div className="Users">
                <div className="row">
                    {this.displayUsers()}
                    {
                        this.state.showModal &&
                        <Modal hide={this.hideModal}>
                            <div className="row">
                                {this.showSingleUser}
                                <div className="col-lg-6">
                                    <p>this.state</p>
                                </div>
                            </div>
                        </Modal>
                    }
                </div>

            </div>
                )
            }
        
        }
export default Users;