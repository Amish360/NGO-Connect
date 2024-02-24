import React, { useState } from 'react';

const Government = () => {
    const [donations, setDonations] = useState([
        { time: '2024-02-17 10:00:00', ngoName: 'NGO A', projectName: 'Project A', amount: 100 },
        { time: '2024-02-17 10:30:00', ngoName: 'NGO B', projectName: 'Project B', amount: 200 },
        { time: '2024-02-17 11:00:00', ngoName: 'NGO C', projectName: 'Project C', amount: 150 },
    ]);

    // Function to add a new donation to the tracker
    const addDonation = (ngoName, projectName, amount) => {
        const newDonation = {
            time: new Date().toLocaleString(),
            ngoName,
            projectName,
            amount
        };
        setDonations([...donations, newDonation]);
    };

    return (
        <div>
            <h2>Live Tracker</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>NGO Name</th>
                        <th>Project Name</th>
                        <th>Donation Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {donations.map((donation, index) => (
                        <tr key={index}>
                            <td>{donation.time}</td>
                            <td>{donation.ngoName}</td>
                            <td>{donation.projectName}</td>
                            <td>${donation.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Government;
