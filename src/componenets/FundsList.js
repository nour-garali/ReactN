import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FundsList = ({ token }) => {
    const [funds, setFunds] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/funds', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setFunds(response.data.data);
        })
        .catch(error => {
            console.error('Error fetching funds:', error);
        });
    }, [token]);

    return (
        <div>
            <h2>Funds List</h2>
            <ul>
                {funds.map(fund => (
                    <li key={fund.id}>{fund.amount}</li>
                ))}
            </ul>
        </div>
    );
}

export default FundsList;
