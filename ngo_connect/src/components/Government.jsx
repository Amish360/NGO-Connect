import React, { useState } from 'react';
import Navbar from './Nav';
import Footer from './Footer';

const Government = () => {
    // eslint-disable-next-line
    const [donations, setDonations] = useState([
        { time: '2024-02-17 10:00:00', ngoName: 'NGO A', projectName: 'Project A', amount: 100 },
        { time: '2024-02-17 10:30:00', ngoName: 'NGO B', projectName: 'Project B', amount: 200 },
        { time: '2024-02-17 11:00:00', ngoName: 'NGO C', projectName: 'Project C', amount: 150 },
        { time: '2024-02-17 11:30:00', ngoName: 'NGO D', projectName: 'Project D', amount: 120 },
        { time: '2024-02-17 12:00:00', ngoName: 'NGO E', projectName: 'Project E', amount: 180 },
        { time: '2024-02-17 12:30:00', ngoName: 'NGO F', projectName: 'Project F', amount: 220 },
        { time: '2024-02-17 13:00:00', ngoName: 'NGO G', projectName: 'Project G', amount: 130 },
        { time: '2024-02-17 13:30:00', ngoName: 'NGO H', projectName: 'Project H', amount: 250 },
        { time: '2024-02-17 14:00:00', ngoName: 'NGO I', projectName: 'Project I', amount: 170 },
        { time: '2024-02-17 14:30:00', ngoName: 'NGO J', projectName: 'Project J', amount: 300 },
        { time: '2024-02-17 15:00:00', ngoName: 'NGO K', projectName: 'Project K', amount: 190 },
    ]);
    

    

    return (
        <div>
            <Navbar/>
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
            <Footer/>
        </div>
    );
};

export default Government;
