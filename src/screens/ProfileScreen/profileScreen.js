import React from 'react';

import './profileScreen.css';
import rankIcon from '../../assets/rank.png';
import pointsIcon from '../../assets/points.png';
import flagsIcon from '../../assets/flags.png';
import editIcon from '../../assets/edit.png';

//import firebase
import firebase from '../../configs/firebase';

// importing utils
import { getUserProfile } from '../../utils/userHelperFuncs';

// importing styles
import '../../Styles.css';

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: firebase.auth().currentUser.displayName,
            email: firebase.auth().currentUser.email,
        }
    }

    componentDidMount() {
        getUserProfile();
    }

    onLogOut = () => {
        this.props.toggleLoading();
        firebase.auth().signOut()
            .then((resp) => {
                console.log(resp);
                window.location.href ="/"
                return;
            })
            .catch((err) => {
                console.log(err);
                this.props.toggleLoading();
                return;
            })
    }

    render() {
        const { name, email } = this.state;

        return (
            <div className="profile-container">
                <div className="profile-card-container">
                    <div className='info__heading'>Stats</div>
                    <div className='info__stats-container'>
                        <div className='info__stats__box-container'>
                            <div className='info__stats__icon-container'>
                                <img src= {rankIcon} alt='' className='info__stats__icon'/>
                            </div>
                            <div className='info__stats__number'>16</div>
                            <div className='info__stats__text'>Rank</div>
                        </div>
                        <div className='info__stats__box-container'>
                            <div className='info__stats__icon-container'>
                                <img src= {pointsIcon} alt='' className='info__stats__icon'/>
                            </div>
                            <div className='info__stats__number'>100</div>
                            <div className='info__stats__text'>Points</div>
                        </div>
                        <div className='info__stats__box-container'>
                            <div className='info__stats__icon-container'>
                                <img src= {flagsIcon} alt='' className='info__stats__icon'/>
                            </div>
                            <div className='info__stats__number'>1</div>
                            <div className='info__stats__text'>Flags</div>
                        </div>
                    </div>
                    <div className='info__heading__details'>Details</div>
                    <div className='info__details__container'>
                        <div className='info__details__heading'>Name</div>
                        <div className='info__details__text info__details__name'>
                            { name }
                            <div className="editNameBtn" onClick={() => console.log("Edit Profile")}>
                                <img src={editIcon} alt='' className='info__details__edit'/>
                            </div>
                        </div>
                    </div>
                    <div className='info__details__container'>
                        <div className='info__details__heading'>Email ID</div>
                        <div className='info__details__text'>{ email }</div>
                    </div>
                    <div className='info__details__container'>
                        <div className='info__details__heading'>Username</div>
                        <div className='info__details__text'>gaganvarma</div>
                    </div>
                    <div className="button loginBtn" onClick={() => this.onLogOut()}>Log Out</div>
                </div>
            </div>
        );
    }
}

export default ProfileScreen;