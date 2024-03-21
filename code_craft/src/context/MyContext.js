import React, { createContext, useState, useContext } from 'react';

// Create a context object
const MyContext = createContext();

// Create a context provider component
const MyProvider = ({ children }) => {
  const host = "http://localhost:3000";
  const [submissions, setSubmissions] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [output, setOutput] = useState({ stdout: "", status: "", time: "", memory: "", stderr: "" });
  const [temp,setTemp]=useState({username:"",language:"python",stdin:"",sourceCode:""});
  

  //Submit Code
  const submitCode = async (username, language, stdin, sourceCode) => {
    const response = await fetch(`${host}/api/submission/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, language, stdin, sourceCode })
    });
    const json = await response.json();
    alert(json.message);
  }

  //fetch all submission
  const fetchSubmission = async () => {
    const response = await fetch(`${host}/api/submission/${username}`, { method: "GET", headers: { "Content-Type": "application/json" } });
    const json = await response.json();
    setSubmissions(json.submission);
    setMessage(json.message);
  }

  //fetch output using api
  const fetchData = async (source_code,language_id,stdin) => {
    setOutput({ stdout: "", status: "", time: "", memory: "", stderr: "" });
    const url = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true&fields=*';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'cbbda44162msheb7109c2d68057ap1a2a7ajsn13bbccc99819',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      body: JSON.stringify({
        language_id: language_id,
        source_code:source_code,
        stdin:stdin
      })
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      setOutput({
        stdout: result.stdout,
        status: result.status.description,
        time: result.time,
        memory: result.memory,
        stderr: result.stderr
      })
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <MyContext.Provider value={{ submissions, message, setUsername, submitCode, fetchSubmission, output, setOutput, fetchData,temp,setTemp }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
const useMyContext = () => useContext(MyContext);

export { MyProvider, useMyContext };
