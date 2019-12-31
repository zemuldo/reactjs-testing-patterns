import React from 'react';

export const ProfileDataContext = React.createContext({});

export const ProfileDataProvider = ProfileDataContext.Provider

export const ProfileDataDecorator = (ChildComponent) => {
  return function (){
    const data = {user: {name: 'Mike Allen', id: 2}, userId: 2} // user Received from some API, while user_id from localStorage
    return (
      <ProfileDataContext.Provider value={data}>
        <ChildComponent/>
      </ProfileDataContext.Provider>
    );
  }
}