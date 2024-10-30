import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './PieCharts.css'; // Make sure to have PieCharts.css file with necessary styles

const JobSearchPage = () => {
  const chartContainer1 = useRef(null);
  const chartContainer2 = useRef(null);
  const chartContainer3 = useRef(null);
  const chartContainer4 = useRef(null); // Additional chart container

  useEffect(() => {
    if (chartContainer1.current && chartContainer2.current && chartContainer3.current && chartContainer4.current) {
      // ... (previous chart creation logic remains the same)
       // Data for first pie chart
       const jobCategories1 = ['Technology', 'Healthcare', 'Finance', 'Education'];
       const jobCounts1 = [25, 30, 20, 15];
 
       new Chart(chartContainer1.current, {
         type: 'pie',
         data: {
           labels: jobCategories1,
           datasets: [{
             label: 'Job Categories',
             data: jobCounts1,
             backgroundColor: [
               'rgba(169,169,169, 0.70)',
               'rgba(128,128,128, 0.7)',
               'rgba(105,105,105, 0.7)',
               'rgba(119,136,153, 0.7)',
             ],
             borderColor: [
               'rgba(169,169,169, 1)',
               'rgba(128,128,128, 1)',
               'rgba(105,105,105, 1)',
               'rgba(119,136,153, 1)',
             ],
             borderWidth: 1,
           }],
         },
         options: {
           responsive: true,
           maintainAspectRatio: false,
           plugins: {
             title: {
               display: true,
               text: 'Job Categories Chart 1',
               fontSize: 18,
             },
           },
         },
       });
 
       // Data for second pie chart
       const jobCategories2 = ['Sales', 'Marketing', 'Operations', 'Customer Service'];
       const jobCounts2 = [20, 15, 25, 30];
 
       new Chart(chartContainer2.current, {
         type: 'pie',
         data: {
           labels: jobCategories2,
           datasets: [{
             label: 'Job Categories',
             data: jobCounts2,
             backgroundColor: [
              'rgba(169,169,169, 0.70)',
              'rgba(128,128,128, 0.7)',
              'rgba(105,105,105, 0.7)',
              'rgba(119,136,153, 0.7)',
            ],
            borderColor: [
              'rgba(169,169,169, 1)',
              'rgba(128,128,128, 1)',
              'rgba(105,105,105, 1)',
              'rgba(119,136,153, 1)',
            ],
             borderWidth: 1,
           }],
         },
         options: {
           responsive: true,
           maintainAspectRatio: false,
           plugins: {
             title: {
               display: true,
               text: 'Job Categories Chart 2',
               fontSize: 18,
             },
           },
         },
       });
 
       
 
       // Data for third pie chart
       const jobCategories3 = ['Engineering', 'Human Resources', 'Design', 'Consulting'];
       const jobCounts3 = [15, 20, 25, 30];
 
       new Chart(chartContainer3.current, {
         type: 'pie',
         data: {
           labels: jobCategories3,
           datasets: [{
             label: 'Job Categories',
             data: jobCounts3,
             backgroundColor: [
              'rgba(169,169,169, 0.70)',
              'rgba(128,128,128, 0.7)',
              'rgba(105,105,105, 0.7)',
              'rgba(119,136,153, 0.7)',
            ],
            borderColor: [
              'rgba(169,169,169, 1)',
              'rgba(128,128,128, 1)',
              'rgba(105,105,105, 1)',
              'rgba(119,136,153, 1)',
            ],
             borderWidth: 1,
           }],
         },
         options: {
           responsive: true,
           maintainAspectRatio: false,
           plugins: {
             title: {
               display: true,
               text: 'Job Categories Chart 3',
               fontSize: 18,
             },
           },
         },
       });
      // Data for fourth pie chart
      const jobCategories4 = ['Management', 'Research', 'Legal', 'Other'];
      const jobCounts4 = [10, 15, 30, 45];

      new Chart(chartContainer4.current, {
        type: 'pie',
        data: {
          labels: jobCategories4,
          datasets: [{
            label: 'Job Categories',
            data: jobCounts4,
            backgroundColor: [
              'rgba(169,169,169, 0.70)',
              'rgba(128,128,128, 0.7)',
              'rgba(105,105,105, 0.7)',
              'rgba(119,136,153, 0.7)',
            ],
            borderColor: [
              'rgba(169,169,169, 1)',
              'rgba(128,128,128, 1)',
              'rgba(105,105,105, 1)',
              'rgba(119,136,153, 1)',
            ],
            borderWidth: 1,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Job Categories Chart 4', // Update the chart title
              fontSize: 18,
            },
          },
        },
      });
    }
  }, []);

  return (
    <section id='JobCards'>
      <h1>Job Categories</h1>
    <div className="job-search-page">
      <div className="chart-container">
        <canvas ref={chartContainer1}></canvas>
      </div>
      <div className="chart-container">
        <canvas ref={chartContainer2}></canvas>
      </div>
      <div className="chart-container">
        <canvas ref={chartContainer3}></canvas>
      </div>
      <div className="chart-container">
        <canvas ref={chartContainer4}></canvas> {/* Render the fourth pie chart */}
      </div>
      {/* Add more charts or related information components here */}
    </div>
    </section>
  );
};

export default JobSearchPage;
