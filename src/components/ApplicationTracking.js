import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function ApplicationTracking() {

    const [flag, setFlag] = useState('');
    const [allEnquries, setAllEnquries] = useState('');
    const [pendingEnquries, setPendingEnquries] = useState('');

    useEffect(() => {
        setFlag(localStorage.getItem('tracking_flag'))

        const applicationLists = async () => {
            let customer_id = localStorage.getItem('customer_id')
            const response = await fetch(`http://localhost:5000/api/customer/dashboardCount/${customer_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            console.log(data)
            if (data.success) {
                console.log("Count data found succesfully.")
                setAllEnquries(data.enquiryData)
                setPendingEnquries(data.pendingEnqData)
            } else {
                console.log("Failed to get count")
            }
        }

        applicationLists()

    }, [])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-CA', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        }).format(date).replace(/-/g, '/');
    };

    return (
        <div>
            {/* Application tracking */}
            <Header />
            <div className="contact_section layout_padding">
                <div className="container-fluid">
                    <h1 className="what_taital">Application Tracking</h1>
                    <div className="contact_section2">
                        <div className="container" style={{ cursor: `pointer` }}>
                            <div className="container">
                                <div className="tracking-card bg-light">
                                    <Link to="/profile" style={{ fontSize: `35px` }}><IoArrowBackCircleSharp /></Link>
                                    {flag == 'enquiries' &&
                                        <>
                                            <h3>All Enquries Applications</h3>
                                            <table className="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Sr.No</th>
                                                        <th>Applicant Name</th>
                                                        <th>Loan Type</th>
                                                        <th>Status</th>
                                                        <th>Submission Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(allEnquries.length > 0) ?
                                                        allEnquries.map((enq,index)=> (
                                                            <tr>
                                                                <td>{index+1}</td>
                                                                <td>{enq.first_name} {enq.last_name}</td>
                                                                <td>{enq.applied_for}</td>

                                                                {
                                                                    enq.status == 'Pending' && <td className="status-pending">{enq.status}</td>
                                                                }

                                                                {
                                                                    enq.status == 'Converted' && <td className="status-approved">{enq.status}</td>
                                                                }

                                                                {
                                                                    enq.status == 'Closed' && <td className="status-rejected">{enq.status}</td>
                                                                }

                                                                <td>{formatDate(enq.date)}</td>
                                                            </tr>
                                                        ))
                                                        :
                                                        <tr>
                                                            <td>No enquiries found.</td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </table>
                                        </>
                                    }

                                    {flag == 'approved' &&
                                        <>
                                            <h3>Approved Applications</h3>
                                            <table className="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Sr.No</th>
                                                        <th>Applicant Name</th>
                                                        <th>Loan Type</th>
                                                        <th>Status</th>
                                                        <th>Submission Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1001</td>
                                                        <td>John Doe</td>
                                                        <td>Personal Loan</td>
                                                        <td className="status-approved">Approved</td>
                                                        <td>2024-07-01</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1002</td>
                                                        <td>Jane Smith</td>
                                                        <td>Education Loan</td>
                                                        <td className="status-pending">Pending</td>
                                                        <td>2024-07-02</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1003</td>
                                                        <td>Michael Johnson</td>
                                                        <td>Car Loan</td>
                                                        <td className="status-rejected">Rejected</td>
                                                        <td>2024-07-03</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </>
                                    }

                                    {flag == 'pending' &&
                                        <>
                                            <h3>Pending Applications</h3>
                                            <table className="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Sr.No</th>
                                                        <th>Applicant Name</th>
                                                        <th>Loan Type</th>
                                                        <th>Status</th>
                                                        <th>Submission Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(pendingEnquries.length > 0) ?
                                                        pendingEnquries.map((pendingEnq,index) => (
                                                            <tr>
                                                                <td>{index+1}</td>
                                                                <td>{pendingEnq.first_name} {pendingEnq.last_name}</td>
                                                                <td>{pendingEnq.applied_for}</td>
                                                                <td className="status-pending">{pendingEnq.status}</td>
                                                                <td>{formatDate(pendingEnq.date)}</td>
                                                            </tr>
                                                        ))
                                                        :
                                                        <tr>
                                                            <td>No enquiries found.</td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </table>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
