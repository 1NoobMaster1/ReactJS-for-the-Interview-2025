import React from 'react';

function Profile() {
    return (
        <div>
            <h1>Profile Card Challenge!</h1>
            <ProfileCard
            name="Alice"
            age={21}
            greeting={
                <div>
                    <strong>Hi Alice, Have a wonderfull day!</strong>
                </div>
            }
            >
            <p>Hobbies: Reading!</p>    
            <button>Contact</button>
            </ProfileCard>

            <ProfileCard
            name="Bob"
            age={23}
            greeting={
                <div>
                    <strong>Hi Bob, Have a wonderfull day!</strong>
                </div>
            }
            >
            <p>Hobbies: Reading!</p>    
            <button>Contact</button>
            </ProfileCard>
        </div>
    );
};

export default Profile;

function ProfileCard(props) {
    return (
        <>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>{props.greeting}</p>
        <div>{props.children}</div>
        </>
    );
};
