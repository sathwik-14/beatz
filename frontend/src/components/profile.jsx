import React, { Component } from 'react'
import './styles/profile.css'
import userIcon from '../../src/assets/user.png'
import postsIcon from '../../src/assets/postsIcon.svg'
import Image1 from '../../src/assets/user/Image1.svg'
import UserPosts from '../../src/components/userPosts'
import UserBeatz from '../../src/components/userBeatz'

function Profile() {
    return (
        <div className="profile">
            <div className="profile-container">
                <img src={userIcon} alt="" />
            </div>
            <div className="profile-info">
                <h6>imAneesh</h6>
            </div>
            <div className="profile-bio">
                <p>Hey there! I am using Beatz</p>
            </div>
            <div className="profile-stats">
                <div className="post-icons">
                    <p>Beatz</p>
                </div>
                <div className="images-icons">
                    <p>Posts</p>
                </div>
            </div>
            {/* <UserPosts></UserPosts> */}
            <UserBeatz></UserBeatz>

        </div>
    );
}
export default Profile;

