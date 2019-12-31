import React from 'react';
import {Profile} from './Profile';
import { render, screen } from '@testing-library/react';
import { ProfileDataProvider } from './ProfileDataProvider';


describe('Profile Component', () => {
    test('Should show login only', () => {
        const withNoUser = {}
        const { getByText } = render(<ProfileDataProvider value={withNoUser}><Profile/></ProfileDataProvider>);
        const loginElement = getByText(/Please login first/i);
        expect(loginElement).toBeInTheDocument();
      });

    test('Should show Edit', () => {
        const withUserSignedIn = {user: {name: 'Danstan Onyango', id: 2}, userId: 2}
        const { getByText } = render(<ProfileDataProvider value={withUserSignedIn}><Profile/></ProfileDataProvider>);
        const nameElement = getByText(/Name: Danstan Onyango/i);
        const EditElement = getByText(/Edit/i);
        expect(nameElement).toBeInTheDocument();
        expect(EditElement).toBeInTheDocument();
        expect(screen.queryByText(/Follow/i)).toBeNull()
      });
    test('Should show Follow, no Edit', () => {
        const withUserDifferentUserSignedIn = {user: {name: 'Danstan Onyango', id: 2}, userId: 3}
        const { getByText } = render(<ProfileDataProvider value={withUserDifferentUserSignedIn}><Profile/></ProfileDataProvider>);
        const nameElement = getByText(/Name: Danstan Onyango/i);
        const FollowElement = getByText(/Follow/i);
        expect(nameElement).toBeInTheDocument();
        expect(FollowElement).toBeInTheDocument();
        expect(screen.queryByText(/Edit/i)).toBeNull()
      });
  });
 
