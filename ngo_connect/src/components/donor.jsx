import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

const Donor = () => {
    const [donationAmount, setDonationAmount] = useState(0);
    const [donationPopupOpen, setDonationPopupOpen] = useState(false);
    const [donationSuccess, setDonationSuccess] = useState(false);
    const [donationCount, setDonationCount] = useState(0);
    const [donationTracker, setDonationTracker] = useState({});
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [creditCardExpiry, setCreditCardExpiry] = useState('');
    const [creditCardCVV, setCreditCardCVV] = useState('');

    const handleDonateClick = () => {
        setDonationPopupOpen(true);
    };

    const handleConfirmDonate = () => {
        // Implement donation logic here
        setDonationSuccess(true);
        setDonationPopupOpen(false);
        setDonationCount(donationCount + 1);
    };

    const projects = [
        {
            ngoName: "NGO A",
            projectName: "Project A",
            projectDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            expectedCompletionDate: "2023-12-31"
        },
        {
            ngoName: "NGO B",
            projectName: "Project B",
            projectDetails: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            expectedCompletionDate: "2024-06-30"
        },
        // Add more projects as needed
    ];

    return (
        <div>
            {projects.map((project, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{project.ngoName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{project.projectName}</h6>
                        <p className="card-text">{project.projectDetails}</p>
                        <p className="card-text">Expected Completion Date: {project.expectedCompletionDate}</p>
                        <button className="btn btn-primary" onClick={handleDonateClick}>
                            <FontAwesomeIcon icon={faDonate} /> Donate
                        </button>
                    </div>

                    {/* Donation Popup */}
                    {donationPopupOpen && (
                        <div className="modal" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Make a Donation</h5>
                                        <button type="button" className="close" onClick={() => setDonationPopupOpen(false)}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="creditCardNumber">Credit Card Number</label>
                                                <input type="text" className="form-control" id="creditCardNumber" value={creditCardNumber} onChange={(e) => setCreditCardNumber(e.target.value)} />
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="creditCardExpiry">Expiry Date</label>
                                                    <input type="text" className="form-control" id="creditCardExpiry" value={creditCardExpiry} onChange={(e) => setCreditCardExpiry(e.target.value)} />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="creditCardCVV">CVV</label>
                                                    <input type="text" className="form-control" id="creditCardCVV" value={creditCardCVV} onChange={(e) => setCreditCardCVV(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="donationAmount">Donation Amount ($)</label>
                                                <input type="number" className="form-control" id="donationAmount" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={() => setDonationPopupOpen(false)}>Close</button>
                                        <button type="button" className="btn btn-primary" onClick={handleConfirmDonate}>Donate</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Donation Success Message */}
                    {donationSuccess && (
                        <div className="modal" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Donation Success</h5>
                                        <button type="button" className="close" onClick={() => setDonationSuccess(false)}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Donation of ${donationAmount} successfully made!</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" onClick={() => setDonationSuccess(false)}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Donor;
