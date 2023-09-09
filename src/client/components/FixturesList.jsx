import React from 'react';
import Fixture from './Fixture'; // Import the Fixture component

const FixtureList = ({ fixtures }) => {
  return (
    <div>
      {fixtures.map((match) => (
        <Fixture key={match.id} match={match} />
      ))}
    </div>
  );
};

export default FixtureList;
