import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import JobCards from './components/Cards/JobCards'; // Import the JobCards component
import './App.css';
import SavedJobTable from './components/Table/SavedJobTable';
import PieCharts from './components/Piecharts/PieCharts';
import ResumeForm from './components/Form/ResumeForm'
import Footer from './components/Footer/Footer'

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
      <main className="content">
        <JobCards /> 
        <SavedJobTable />
        <PieCharts />
        <ResumeForm />
        <Footer />{/* Use ResumeForm here */}
        {/* Any other components or content can be added here */}
        
      </main>
    </div>
  );
}

export default App;
