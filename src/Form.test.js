import React from 'react';
import Form from './Form';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe('Test Form Submit', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const form = Enzyme.shallow((<Form handleSubmit={mockCallBack}/>));
    form.find('input').simulate('change', {target: {value: 'James'}});
    form.simulate('submit');
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(mockCallBack.mock.calls).toEqual([[{name: 'James'}]]);
  });
});