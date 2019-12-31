import React from 'react';
import WithName from './WithName';

export function HelloName({name}) {
  return (
    <div>
      Hello {name}
    </div>
  );
}

export default WithName(HelloName);
