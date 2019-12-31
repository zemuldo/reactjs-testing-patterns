import React, { useState } from 'react';

export default function Form({ handleSubmit }) {

  const [name, setName] = useState('')
  return (
    <form onSubmit={() => handleSubmit({ name })}>
      <input onChange={(e) => setName(e.target.value)} name='name' value={name} />
      <button type='submit'>Submit</button>
    </form>
  )
}