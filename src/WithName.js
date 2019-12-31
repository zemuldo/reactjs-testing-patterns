import React from 'react';

export default function WithName(Component){
    class AddName extends React.Component {
        render(){
            return <Component name='James' />
        }
    }

    return AddName
}