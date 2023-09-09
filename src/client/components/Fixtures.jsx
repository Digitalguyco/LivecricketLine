import React from 'react';

const Fixture = ({ match }) => {
  return (
    <div className="border rounded p-4 mb-4">
      <p>Date: {match.event_date_start}</p>
      <p>Team 1: {match.team1}</p>
      <p>Team 2: {match.team2}</p>
      {/* Add more details here */}
    </div>
  );
};

export default Fixture;
