// SavedJobTable.js

import React, { useRef } from 'react';
import './SavedJobTable.css';

function SavedJobTable({ tableRef }) {
  const jobData = [
    { id: 1, title: 'Job Title 1', company: 'Company A', location: 'City A', status: 'Applied' },
    { id: 2, title: 'Job Title 2', company: 'Company B', location: 'City B', status: 'Saved' },
    { id: 3, title: 'Job Title 3', company: 'Company C', location: 'City C', status: 'Interview' },
    { id: 4, title: 'Job Title 4', company: 'Company D', location: 'City D', status: 'Offer' },
    // Add more job data
    { id: 5, title: 'Job Title 5', company: 'Company E', location: 'City E', status: 'Applied' },
    { id: 6, title: 'Job Title 6', company: 'Company F', location: 'City F', status: 'Saved' }, //... other job data
  ];

  const topCompanies = [
    { rank: 1, name: 'Google', industry: 'Technology', rating: 4.5 },
    { rank: 2, name: 'Amazon', industry: 'Finance', rating: 4.3 },
    { rank: 3, name: 'Wipro', industry: 'Healthcare', rating: 4.2 },
    { rank: 4, name: 'Infosys', industry: 'Retail', rating: 4.0 },
    { rank: 5, name: 'IBM', industry: 'Hospitality', rating: 3.9 },
    // Add more company data
    { rank: 6, name: 'Microsoft', industry: 'Technology', rating: 4.7 },
    { rank: 7, name: 'Sony', industry: 'Finance', rating: 4.1 },
    // Add as many company entries as needed//... other top companies data
    { rank: 8, name: 'Dell', industry: 'Healthcare', rating: 4.4 },
    { rank: 9, name: 'Intel', industry: 'Retail', rating: 4.2 },
    { rank: 10, name: 'Zara', industry: 'Technology', rating: 4.6 },
    // Add three more companies or adjust the number of companies as needed
  ];
  

  return (
    <section id='table'>
    <div ref={tableRef}>
        <h2>Top Companies</h2>
        <table className="top-companies-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Company Name</th>
              <th>Industry</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {topCompanies.map((company) => (
              <tr key={company.rank}>
                <td>{company.rank}</td>
                <td>{company.name}</td>
                <td>{company.industry}</td>
                <td>{company.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </section>
  );
}

export default SavedJobTable;
