import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useMyContext } from '../../context/MyContext';
import { useNavigate } from 'react-router-dom';
import './codeSubmissionPage.scss'; // Import CSS file for styling


function CodeSubmissionPage() {
  const [sourceCode, setSourceCode] = useState('');
  const [submission,setSubmission] = useState({username:"",language:"python",stdin:""});

  let navigate = useNavigate();

  const { setUsername,submitCode, fetchData}=useMyContext();
  const languageId = {
    cpp: 52,
    python: 71,
    java: 62,
    javascript: 93
  }

  const getLanguageId = (language) => {
    const lang = language.toLowerCase();
    return languageId[lang] || null;
};

  useEffect(()=>{
    setUsername(submission.username);
    // setTemp({username:submission.username,language:submission.language,stdin:submission.stdin,sourceCode:sourceCode});
  },[submission.username])

  const handleSubmit = async (event) => {
    console.log(submission);
    event.preventDefault();
    const langId = getLanguageId(submission.language);

    submitCode(submission.username,submission.language,submission.stdin,sourceCode);
    fetchData(sourceCode,langId,submission.stdin);
    navigate("/output",{replace:true});
  };

  const onChange = (e)=>{
    e.preventDefault();

    setSubmission({...submission,[e.target.name]:e.target.value});
  }

  return (
    <div className="container">
      <form className="formContainer" onSubmit={handleSubmit}>
        <section className='subContainer' id='section1'>
          <div className="formGroup" >
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name='username' value={submission.username} onChange={onChange} className="input-field" minLength={3} required />
          </div>
          <div className="formGroup">
            <label htmlFor="stdin">Standard Input (stdin):</label>
            <textarea id="stdin" rows={25} name='stdin' value={submission.stdin} onChange={onChange} className="input-field"  required />
          </div>

        </section>

        <section className='subContainer' id='section2'>
          <div className='fornGroup' id='group1'>
            <div className="formGroup">
              <label htmlFor="language">Preferred Code Language:</label>
              <select id="language" name='language' value={submission.language} onChange={onChange} required >
                <option value="cpp">C++</option>
                <option value="java">Java</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
              </select>
            </div>
            <button type="submit" className="submitButton">Submit</button>
          </div>

          <div className="formGroup input-field">
            <label htmlFor="sourceCode">Source Code:</label>
            <Editor height="400px" defaultLanguage={submission.language}  defaultValue="//Some code" value={submission.sourceCode} onChange={(value,event)=>setSourceCode(value)} required />
          </div>
        </section>
      </form>
    </div>
  );
}

export default CodeSubmissionPage;
