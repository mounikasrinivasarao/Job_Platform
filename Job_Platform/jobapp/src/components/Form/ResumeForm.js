import React, { useState } from 'react';
import './Resume.css'; // Import the CSS file
import axios from 'axios';


const DateAndDaySelection = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const dayOptions = days.map((day, index) => (
    <option key={index} value={day}>
      {day}
    </option>
  ));

  return (
    <div>
      <label>
        Date:
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </label>
      <br />
      <label>
        Day:
        <select value={selectedDay} onChange={handleDayChange}>
          <option value="">Select Day</option>
          {dayOptions}
        </select>
      </label>
    </div>
  );
};
const CheckboxesComponent = () => {
  const [selectedGenders, setSelectedGenders] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedGenders([...selectedGenders, value]);
    } else {
      setSelectedGenders(selectedGenders.filter((gender) => gender !== value));
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      Gender:
      <div style={{ marginRight: '20px' }}>
        <label>
          Male:
          <input
            type="checkbox"
            value="male"
            checked={selectedGenders.includes('male')}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
      <div style={{ marginRight: '20px' }}>
        <label>
          Female:
          <input
            type="checkbox"
            value="female"
            checked={selectedGenders.includes('female')}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
      <div>
        <label>
          Other:
          <input
            type="checkbox"
            value="other"
            checked={selectedGenders.includes('other')}
            onChange={handleCheckboxChange}
          />
        </label>
      </div>
    </div>
  );
};

const RadioButtonsComponent = () => {
  const [maritalStatus, setMaritalStatus] = useState('');

  const handleStatusChange = (event) => {
    setMaritalStatus(event.target.value);
  };

  return (
    <div>
      Status:
      <label>
        Married:
        <input
          type="radio"
          value="married"
          checked={maritalStatus === 'married'}
          onChange={handleStatusChange}
        />
      </label>
      <label>
        Unmarried:
        <input
          type="radio"
          value="unmarried"
          checked={maritalStatus === 'unmarried'}
          onChange={handleStatusChange}
        />
      </label>
    </div>
  );
};

const TextboxesComponent = () => {
  const [textValue1, setTextValue1] = useState('');
  const [textValue2, setTextValue2] = useState('');

  const handleTextChange1 = (event) => {
    setTextValue1(event.target.value);
  };

  const handleTextChange2 = (event) => {
    setTextValue2(event.target.value);
  };

  return (
    <div>
      <label>
        Projects:
        <input type="text" value={textValue1} onChange={handleTextChange1} />
      </label>
      <label>
        Declaration:
        <input type="text" value={textValue2} onChange={handleTextChange2} />
      </label>
    </div>
  );
};

const ButtonComponent = ({ resumeData }) => {
  const downloadResume = () => {
    const resumeJson = JSON.stringify(resumeData, null, 2);
    const blob = new Blob([resumeJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={downloadResume}>Save Resume</button>
  );
};


function Resume() {
  const [resumeData, setResumeData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experiences: [],
    educations: [],
    skills: [],
    // Add other fields as needed based on components
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResumeData({
      ...resumeData,
      [name]: value,
    });
  };

  const downloadResume = () => {
    const resumeJson = JSON.stringify(resumeData, null, 2);
    const blob = new Blob([resumeJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make an HTTP POST request to save resume data
      await axios.post('/api/resume', resumeData);
      console.log('Resume data saved successfully');
      // Optionally, show a success message or navigate to another page
    } catch (error) {
      console.error('Error saving resume data:', error);
      // Handle error, show error message to user, etc.
    }
  };

  return (
    <section id='resumebuilder' style={{ backgroundImage: `url('https://tse4.mm.bing.net/th?id=OIP.TRMgQgxeaSM-bsaz27ewMQHaEK&pid=Api&P=0&h=220')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="form-container">
        <div className="form-box">
          <h1>Resume Builder</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input type="text" name="fullName" value={resumeData.fullName} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" value={resumeData.email} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Address:              
              <input type="tel" name="phone" value={resumeData.phone} onChange={handleInputChange} />
            </label>
            <br />
            <label>
            Educations:
              <input type="text" name="address" value={resumeData.address} onChange={handleInputChange} />
            </label>
            <br />
            <label>
            Skills:
              <textarea name="summary" value={resumeData.summary} onChange={handleInputChange} />
            </label>
            <br />
            {/* Include other form elements */}
            <DateAndDaySelection />
            <br />
            <CheckboxesComponent />
            <br />
            <RadioButtonsComponent />
            <br />
            <TextboxesComponent />
            <br />
            <ButtonComponent />
            <br />
            {/* Submit button */}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Resume;
