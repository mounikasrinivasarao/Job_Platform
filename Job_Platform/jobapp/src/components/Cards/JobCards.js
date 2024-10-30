import React, { useState } from 'react';
import './JobCards.css';

function JobCards() {
  // Updated job listings data
  const jobListings = [
    {
      id: 1,
      company: 'Cognizent',
      title: 'Frontend Developer',
      location: 'New York',
      description: 'Join our team as a frontend developer!',
      experience: '2 years',
      role: 'Developer',
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.DQqTlD7IWwVUaeqZP0bGoAHaE9&pid=Api&P=0&h=220',
      link: 'https://in.best-jobs-online.com/serp/2/?position=Front+End+Developer&locphysical=116074&qrn_source=google&qrn_medium=cpc&qrn_campaign=439154329&msclkid=41a66cffccf51938cea709a255534569&utm_source=bing&utm_medium=cpc&utm_campaign=IN%7CPositionKWs&utm_term=Front%20End%20Developer%20work&utm_content=Front%20End%20Developer'
    },
    {
      id: 2,
      company: 'Deloitte',
      title: 'Backend Developer',
      location: 'San Francisco',
      description: 'We are hiring a backend developer.',
      experience: '3 years',
      role: 'Developer',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.YI_P_BT56yFVIQjl7HEO2wHaE8&pid=Api&P=0&h=220',
      link: 'https://in.best-jobs-online.com/serp/2/?position=Backend&locphysical=116074&qrn_source=google&qrn_medium=cpc&qrn_campaign=439154329&msclkid=3d2a935c4e3a17e192c5f601d7e1055d&utm_source=bing&utm_medium=cpc&utm_campaign=IN%7CPositionKWs&utm_term=Backend%20jobs&utm_content=Backend'
    },
    {
      id: 3,
      company: 'TCC',
      title: 'UI/UX Designer',
      location: 'Los Angeles',
      description: 'Looking for a talented UI/UX designer to join our team!',
      experience: '3 years',
      role: 'Designer',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.AfV0v1RKAmT35Gk0ovLGbAHaE8&pid=Api&P=0&h=220',
      link: 'https://in.jobrapido.com/Ui-Designer-jobs?r=auto&utm_source=yahoo&utm_medium=cpc&utm_campaign=IN_JOB_SEARCH&r=auto&utm_agid=756899523&utm_kwid=kwd-8131668696:loc-90&ext=&int=&phy=116074&mt=e&dev=c&net=o&msclkid=63fec1eb58e81e61f929a4b6c2f79c5b&utm_source=bing&utm_medium=cpc&utm_campaign=IN_JOB_SEARCH&utm_term=vacancies%20ui%20designer&utm_content=0-5001-vacancies'
    },
    {
      id: 4,
      company: 'Amazon',
      title: 'Data Analyst',
      location: 'Chicago',
      description: 'We need a data analyst to analyze and interpret data.',
      experience: '2 years',
      role: 'Analyst',
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.kCzAiwMGNB0Unwtqcn3DTAHaEn&pid=Api&P=0&h=220',
      link: 'https://in.best-jobs-online.com/serp/2/?position=Data+Analyst&locphysical=116074&qrn_source=google&qrn_medium=cpc&qrn_campaign=439154329&msclkid=62e47f6b4ed81769db7b1a36d4913190&utm_source=bing&utm_medium=cpc&utm_campaign=IN%7CPositionKWs&utm_term=Data%20Analyst%20hiring&utm_content=Data%20Analyst'
    },
    // Add more job listings as needed
    {
      id: 5,
      company: 'IBM',
      title: 'Software Engineer',
      location: 'Seattle',
      description: 'Join our software engineering team in Seattle!',
      experience: '4 years',
      role: 'Engineer',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.wwEQPYejzjAE2Jgj3Lr-_QHaFp&pid=Api&P=0&h=220',
      link: 'https://in.best-jobs-online.com/serp/2/?position=Software+Engineer&locphysical=116074&qrn_source=google&qrn_medium=cpc&qrn_campaign=439154329&msclkid=3b75f039d13616d582e495644b40e40c&utm_source=bing&utm_medium=cpc&utm_campaign=IN%7CPositionKWs&utm_term=Software%20Engineer%20hiring&utm_content=Software%20Engineer'
    },
    {
      id: 6,
      company: 'Cisco',
      title: 'Product Manager',
      location: 'San Diego',
      description: 'We are seeking a product manager for our San Diego office.',
      experience: '5 years',
      role: 'Manager',
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.1M04ObN4nIwSO3iz3czvKwHaE6&pid=Api&P=0&h=220',
      link: 'https://in.jobrapido.com/Job-Product-Manager-jobs?r=auto&utm_source=yahoo&utm_medium=cpc&utm_campaign=IN_JOB_SEARCH&r=auto&utm_agid=756899515&utm_kwid=kwd-8131742907:loc-90&ext=&int=&phy=116074&mt=e&dev=c&net=o&msclkid=3ceef96f3aec101b99809c32a059ffed&utm_source=bing&utm_medium=cpc&utm_campaign=IN_JOB_SEARCH&utm_term=job%20product%20manager&utm_content=0-5000-job'
    },
    // Add more job listings for additional companies
  ];
  

  const [selectedRole, setSelectedRole] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const uniqueRoles = [...new Set(jobListings.map((job) => job.role))];
  const uniqueExperience = [...new Set(jobListings.map((job) => job.experience))];
  const uniqueCities = [...new Set(jobListings.map((job) => job.location))];

  const clearFilters = () => {
    setSelectedRole('');
    setSelectedExperience('');
    setSelectedCity('');
  };

  const filterJobListings = () => {
    return jobListings.filter((job) => {
      return (
        (!selectedRole || job.role === selectedRole) &&
        (!selectedExperience || job.experience === selectedExperience) &&
        (!selectedCity || job.location === selectedCity)
      );
    });
  };

  return (
    <section id='cards'>
      <div className="filter-options">
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">Select Role</option>
          {uniqueRoles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <select
          value={selectedExperience}
          onChange={(e) => setSelectedExperience(e.target.value)}
        >
          <option value="">Select Experience</option>
          {uniqueExperience.map((exp) => (
            <option key={exp} value={exp}>
              {exp}
            </option>
          ))}
        </select>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select City</option>
          {uniqueCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button onClick={clearFilters}>Clear Filters</button>
      </div>
      <div className="job-cards-container">
      {filterJobListings().map((job) => (
        <div key={job.id} className="job-card">
          <img src={job.imageUrl} alt={job.company} />
          <div className="job-info">
            <h2>{job.title}</h2>
            <p>{job.company} - {job.location}</p>
            <p>{job.description}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer" className="details-button">
  Apply
</a>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
}

export default JobCards;
