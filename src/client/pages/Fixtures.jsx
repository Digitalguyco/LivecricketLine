import React, { useEffect, useState } from 'react';
import { FixtureList } from '../components/FixturesList'
import api from '../../api';

const FixturePage = ({ fixtures }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [fixuresData, setFixtureData] = useState([])

  useEffect(() => {
    api.get('match-cards/')
      .then((res) => {
        console.log(res.data.data);
        setFixtureData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  // Filter fixtures by selected date
  const filteredFixtures = fixuresData.filter((match) => {
    // Assuming date format in your data is 'YYYY-MM-DD'
    return match.event_date_start  === selectedDate;
  });

  return (
    <div>
      {/* Date filter controls */}
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      {/* Display filtered fixtures */}
      <FixtureList fixtures={filteredFixtures} />
    </div>
  );
};

export default FixturePage;
