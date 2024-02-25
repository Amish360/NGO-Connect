import React from 'react';
import Navbar from './Nav';
import Footer from './Footer';

const DonationsTracker = () => {
    // Define sample data for donations
    const sampleData = [
        { ngoName: 'NGO A', projectName: 'Project A', amountDonated: 100 },
        { ngoName: 'NGO B', projectName: 'Project B', amountDonated: 200 },
        { ngoName: 'NGO C', projectName: 'Project C', amountDonated: 150 },
        { ngoName: 'NGO D', projectName: 'Project D', amountDonated: 300 },
        { ngoName: 'NGO E', projectName: 'Project E', amountDonated: 250 },
        { ngoName: 'NGO F', projectName: 'Project F', amountDonated: 180 },
        { ngoName: 'NGO G', projectName: 'Project G', amountDonated: 220 },
        { ngoName: 'NGO H', projectName: 'Project H', amountDonated: 270 },
        { ngoName: 'NGO I', projectName: 'Project I', amountDonated: 320 },
        { ngoName: 'NGO J', projectName: 'Project J', amountDonated: 150 },
    ];
    

    return (
        <div>
            <Navbar/>
            <h2>Donations Tracker</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>NGO Name</th>
                        <th>Project Name</th>
                        <th>Amount Donated ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleData.map((donation, index) => (
                        <tr key={index}>
                            <td>{donation.ngoName}</td>
                            <td>{donation.projectName}</td>
                            <td>{donation.amountDonated}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer/>
        </div>
    );
};

export default DonationsTracker;
