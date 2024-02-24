import React from 'react';

const DonationsTracker = ({ donationTracker }) => {
    return (
        <div>
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
                    {Object.keys(donationTracker).map((projectId, index) => (
                        <tr key={index}>
                            <td>{donationTracker[projectId].ngoName}</td>
                            <td>{donationTracker[projectId].projectName}</td>
                            <td>{donationTracker[projectId].amountDonated}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DonationsTracker;
