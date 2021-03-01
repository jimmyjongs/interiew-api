import React, { useState, useRef, useEffect } from 'react';
import Question from './Question';
import '../sass/index.scss';

const Interviews = function () {
    const [questionData, setQuestionData] = useState([]);
    const [counter, setCounter] = useState(0);
    let questionContainer = useRef(null);

    function addQuestion() {
        let question = questionContainer.current;
        setCounter((prevState) => prevState + 1);
    }

    function handlePassedData(data) {
        setQuestionData([...questionData, data]);
    }

    useEffect(() => {
        console.log(questionData);
    }, [questionData])

    return (
        <div className='interview-container'>
            <h1>Create an Interview</h1>
            <form>
                <div>
                <label>Interviewer</label>
                <input type = 'text' name='interviewer' placeholder='Interviewer Name' />
                </div>
                <div>
                <label>Interviewee</label>
                <input type = 'text' name='interviewee' placeholder='Interviewee Name' />
                </div>
            </form>
            <div className='question-box' ref={questionContainer}>
                {[...Array(counter)].map((item, index) => <Question key={index} setData={handlePassedData} setQuestionData={setQuestionData} index={index} questionData={questionData} />)}
            </div>
            <div className='btns'>
            <button className='add-btn' onClick={addQuestion}>Add question</button>
            <button className='completed-btn'>Complete Interview</button>
            </div>
        </div>
    )
}


export default Interviews;