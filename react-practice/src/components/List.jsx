import React from 'react';

const List = ({ animals }) => {

  if (!animals) {
    return <div>Loading...</div>
  }

  if (animals.length === 0) {
    return <div>There are no animals in the list!</div>
  }

  return (
    <div>
      <h2>List of Animals:</h2>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>
        })}
      </ul>
    </div>
  );
};

export default List;
