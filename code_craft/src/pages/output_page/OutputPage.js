import React, { useEffect } from 'react';
import SubmissionTable from './SubmissionTable';
import { useMyContext } from '../../context/MyContext';
import './OutputPage.scss';
import OutputInfo from '../../component/OutputInfo';

function OutputPage() {
  const { fetchSubmission,output } = useMyContext();


  useEffect(() => {
    const handleSubmission = async ()=>{
      fetchSubmission();
    }
    handleSubmission();
    // eslint-disable-next-line
  }, []);

  const onChange = ()=>{

  }

  return (
    <div className='parent'>
      <div className='section1'>
        <h3 style={{ padding: 10 }}>Submitted Entries</h3>
        <SubmissionTable />
      </div>
      <div className='section2'>
        <div className="outputInfo">
          <OutputInfo/>
        </div>
        <div className="stdout">
          <label htmlFor="stdout"><h3>Standard output (stdout):</h3></label>
          <textarea id="stdout" rows={15} name='stdout' value={output.stderr?output.stderr:output.stdout} onChange={onChange}   className="output-field" />
        </div>
      </div>
    </div>
  );
}

export default OutputPage;
