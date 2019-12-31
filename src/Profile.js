import React, {useContext} from 'react';
import {ProfileDataContext, ProfileDataDecorator} from './ProfileDataProvider'

export function Profile(props) {

    const {user, userId} = useContext(ProfileDataContext)

    return (
        <div>

            {!userId && <div>Please Login First</div>}
            {
                userId &&
                <div>
                    <h1>Profile</h1>

                    <p>Name: {user.name}</p>

                    {user.id === userId && <button>Edit</button>}

                    {user.id !== userId && <button>Follow</button>}

                </div>
            }

        </div>
    )
}

export default ProfileDataDecorator(Profile)