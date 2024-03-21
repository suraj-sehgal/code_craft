import React from 'react';
import './SubmissionTable.scss'; // Import CSS file for styling
import { useMyContext } from '../../context/MyContext';


function SubmissionTable() {
  const { submissions,fetchData } = useMyContext();
  
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

  const handleOutput=  (id)=>{
    console.log(submissions[id].language);
    const langId = getLanguageId(submissions[id].language);
    console.log(langId);
    fetchData(submissions[id].sourceCode,langId,submissions[id].stdin);
  }

  

  return (
    <div className="table-container">
      <table className="submission-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Code Language</th>
            <th>Standard Input (stdin)</th>
            <th>Source Code (First 100 characters)</th>
            <th>Timestamp</th>
            <th>Show Output</th>
          </tr>
        </thead>
        <tbody>
          {submissions?.map((submission, index) => (
            <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{submission.username}</td>
              <td>{submission.language}</td>
              <td>{submission.stdin}</td>
              <td>{submission.sourceCode?.length>100?submission.sourceCode.slice(0, 100):submission.sourceCode}</td>
              <td>{submission.createdAt}</td>
              <td><button type="output" className="outputButton" value={index} onClick={(e) => handleOutput(e.target.value)}>Output</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubmissionTable;
