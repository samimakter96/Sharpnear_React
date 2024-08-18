
import React from 'react'
import List from './components/List'
import Button from './components/Button';

const App = () => {
  const animals = [];

  return (
    <>
      <h1>Animals</h1>
      <List animals={animals} />

      <hr />

      <Button text='Click Me!' color="red" fontSize={12}/>
      <Button text="Don't Click Me!" color='blue' fontSize={16}/>
      <Button text='Click Me!' color='green' fontSize={22}/>
      <Button />
    </>
  );
}

export default App