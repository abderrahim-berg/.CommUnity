import React, { useState } from 'react'
import "../Styles/ProfileSettings.css";

function ProfileSettings(props) {
  const [activeTab, setActiveTab] = useState(0)

  // personal info tab variables
  const [fullName, setFullName] = useState(props.fullName ?? '')
  const [userName, setUserName] = useState(props.userName ?? '')
  const [contact, setContact] = useState(props.contact ?? '')
  const [birthday, setBirthDay] = useState(props.birthday ?? '')
  const [gender, setGender] = useState(props.gender ?? '')
  const [bio, setBio] = useState(props.bio ?? '')

  // education tab variables
  const [school, setSchool] = useState(props.school ?? '')
  const [diplomat, setDiplomat] = useState(props.diplomat ?? '')
  const [speciality, setSpeciality] = useState(props.speciality ?? '')
  const [description, setDescription] = useState(props.description ?? '')
  const [status, setStatus] = useState(props.status ?? '')
  const [firm, setFirm] = useState(props.firm ?? '')
  const [field, setField] = useState(props.field ?? '')

  // security tab variables
  const [password, setPassword] = useState('')
  const [authType, setAuthType] = useState(props.authType ?? '')
  const [authValue, setAuthValue] = useState(props.authValue ?? '')

  // account tab variables
  const [reason, setReason] = useState('')

  function tabs(panelIndex){
    setActiveTab(panelIndex)
  }

  function editPersonal(){
    // Personal info function
    alert("saved successfully")
  }

  function editEducation(){
    // Education function
    alert("saved successfully")
  }

  function editSecurity(){
    // Security function
    alert("saved successfully")
  }

  function editAccount(){
    // Account function
    alert("saved successfully")
  }

  return (
    <div className="container">
      <div className="leftbox">
        <nav className='profilinfonav'>
          <a onClick={() => tabs(0)} className={`tab ${activeTab === 0 && 'active'}`}>
            <i className="bi bi-person" />
          </a>
          <a onClick={() => tabs(1)} className={`tab ${activeTab === 1 && 'active'}`}>
            <i className="bi bi-book" />
          </a>
          <a onClick={() => tabs(2)} className={`tab ${activeTab === 2 && 'active'}`}>
            <i className="bi bi-shield-lock" />
          </a>
          <a onClick={() => tabs(3)} className={`tab ${activeTab === 3 && 'active'}`}>
            <i className="bi bi-door-open" />
          </a>
        </nav>
      </div>
      <div className="rightbox">
        <div className="profile tabShow" style={{display: activeTab === 0 ? 'block': 'none'}}>
          <h1>Personal Info</h1>
          <h2>Full Name</h2>
          <input type="text" className="input" placeholder="Enter your full name" value={fullName} onChange={e => setFullName(e.target.value)} />
          <h2>Username</h2>
          <input type="text" className="input" placeholder="Enter your username" value={userName} onChange={e => setUserName(e.target.value)} />
          <h2>Contact</h2>
          <input type="email" name="email" placeholder="Enter your email" value={contact} onChange={e => setContact(e.target.value)} />
          <h2>Birthday</h2>
          <input type="date" name="birthday" value={birthday} onChange={e => setBirthDay(e.target.value)} />
          <h2>Gender</h2>
          <select name="gender" value={gender} onChange={e => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br></br>
          <button className="button" onClick={() => editPersonal()}>Edit</button>
        </div>
        <div className="education tabShow" style={{display: activeTab === 1 ? 'block': 'none'}}>
          <h1>Education</h1>   
          <h2>School</h2>
          <input type="text" className="input" value={school} onChange={e => setSchool(e.target.value)} />
          <h2>Diplomat</h2>
          <input type="text" className="input" value={diplomat} onChange={e => setDiplomat(e.target.value)} />
          <h2>Speciality</h2>
          <input type="text" className="input" value={speciality} onChange={e => setSpeciality(e.target.value)} />
          <h2>Description</h2>
          <textarea name="description" className="input" defaultValue={""} value={description} onChange={e => setDescription(e.target.value)} />
          <h2>Current status </h2>
          <select name="current status" value={status} onChange={e => setStatus(e.target.value)} >
            <option value=""></option>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
          </select>
          {status === 'employee' &&
            <><h2>Firm</h2> 
          <input type="text" className="input" value={firm} onChange={e => setFirm(e.target.value)} />
          <h2>Field</h2>
          <input type="text" className="input" value={field} onChange={e => setField(e.target.value)} />
          </>
          }
          <br></br>
          <button className="button" onClick={() => editEducation()}>Edit</button>
        </div>
        <div className="security and log in tabShow" style={{display: activeTab === 2 ? 'block': 'none'}}>
          <h1>Security and log in </h1>  
          <h2>Change password</h2>
          <input type="password" className="input" placeholder="New password" defaultValue="brightcode" value={password} onChange={e => setPassword(e.target.value)} />
          <h2>Two-factor authentication</h2>
          <select name="two-factor authentication" value={authType} onChange={e => setAuthType(e.target.value)}>
            <option value=""></option>
            <option value="phone number">Phone number</option>
            <option value="email adress">Email Adress</option>
          </select>
          {authType === 'phone number' && <input type="tel" name="tel" value={authValue} onChange={e => setAuthValue(e.target.value)} />}
          {authType === 'email adress' && <input type="email" name="email" value={authValue} onChange={e => setAuthValue(e.target.value)} />}
          <br></br>
          <button className="button" onClick={() => editSecurity()}>Edit</button>
        </div>
        <div className="account management tabShow" style={{display: activeTab === 3 ? 'block': 'none'}}>
          <h1>Account management </h1>
          <h2>Close account</h2> 
          <p> We are so sad to see you go , please do tell us why. </p>
          <textarea name="reason" defaultValue={""} value={reason} onChange={e => setReason(e.target.value)} />
          <br></br>
          <button className="button" onClick={() => editAccount()}>Edit</button>
          
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings