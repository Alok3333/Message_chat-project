import React, { useState } from 'react';

const Tick = () => {
    const [formattedDate, setFormattedDate] = useState('-- --- -- , --:--:--');
//   let formattedDate;
    setInterval(() => {
        const currentDate = new Date();
        const fDate = currentDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        });
        // console.log("run in console",formattedDate);
        setFormattedDate(fDate);
    }, 1000);
    // console.log("Running",formattedDate);

  return <div>Current Date and Time: {formattedDate}</div>;
};

export default Tick;
