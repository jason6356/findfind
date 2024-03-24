import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Row, Col } from 'antd';
import "./QuestionAllocation.css";
import questionsData from './question.json';
import fs from 'fs';


const questionWrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    minHeight: '55px',
    maxHeight: '400px',
    margin: '0 auto',
};

const questionStyles = {
    padding: '0 8px',
    margin: '10px',
    backgroundColor: '#430f58',
    color: '#e0e0e0',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: '100%',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
};


const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const nextButtonStyles = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#d5def5',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    fontWeight: '600',
};

const answerContainerStyles = {
    marginTop: '20px',
};

const answerButtonStyles = {
    padding: '10px 20px',
    margin: '0 10px',
    backgroundColor: '#d5def5',
    color: 'black',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    fontWeight: '600',
    marginTop: '10px',
    border: 'none',
};

const resultResponsive = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 12 },
    xl: { span: 12 },
};

const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const notCenterStyle = {
    display: 'flex',
    marginLeft: '100px',
};


const QuestionComponent = ({ question, onClick, isMobileOrDesktop, isCurrentQuestion }) => {
    return (
        <div
            style={{
                ...questionWrapperStyles,
                maxWidth: isMobileOrDesktop ? '400px' : '280px',
                width: isMobileOrDesktop ? '350px' : '280px',
            }}>
            <button
                style={{
                    ...questionStyles,
                    backgroundColor: isCurrentQuestion ? '#982bc4' : '#430f58',
                }}
                onClick={onClick}>{question}</button>
        </div>
    );
};

const QuestionAllocation = () => {
    const [currentQuestions, setCurrentQuestions] = useState([]);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    const [answer, setAnswer] = useState('');

    const isMobileOrDesktop = useMediaQuery({ minWidth: 768 });


    useEffect(() => {
        const initialQuestions = getInitialQuestions();
        setCurrentQuestions(initialQuestions);
    }, []); // Empty dependency array means this effect runs only once on mount

    const handleQuestionClick = (questionIndex) => {
        setSelectedQuestionIndex(questionIndex);
    };


    const handleAnswerSubmission = (userAnswer) => {
        // Update the answer for the selected question
        questionsData[(currentPage * 4) - 4 + selectedQuestionIndex].answer = userAnswer;
        setCurrentQuestions(questionsData.slice((currentPage - 1) * 4, currentPage * 4));

        console.log('Updated questions data:', questionsData);
    };

    const getInitialQuestions = () => {
        const initialQuestions = questionsData.slice((currentPage - 1) * 4, currentPage * 4);
        setSelectedQuestionIndex(null); // Reset selected question index
        return initialQuestions;
    };


    const handleNextQuestions = () => {
        if (currentPage === (questionsData.length / 4)) return;

        const nextQuestions = questionsData.slice(currentPage * 4, (currentPage * 4) + 4);
        setCurrentQuestions(nextQuestions);
        setCurrentPage(currentPage + 1);

        setSelectedQuestionIndex(null); // Reset selected question
    };

    const handlePreviousQuestions = () => {
        if (currentPage === 1) return;

        const previousQuestions = questionsData.slice((currentPage - 2) * 4, ((currentPage - 2) * 4) + 4);
        setCurrentQuestions(previousQuestions);
        setCurrentPage(currentPage - 1);

        setSelectedQuestionIndex(null); // Reset selected question
    };

    // Complete the answer submission and update the questions data to JSON file
    const completeAnswer = () => {
        fs.writeFile('./question.json', JSON.stringify(questionsData), function(err) {
            if (err) {
              console.log(err);
            }
          });
    };

    return (
        <div style={{ ...containerStyles, width: isMobileOrDesktop ? '80%' : '100%', }}>
            <h1 style={{
                textAlign: 'left',
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '20px',
                alignSelf: isMobileOrDesktop ? 'flex-start' : 'center',
                marginLeft: isMobileOrDesktop ? '70px' : '0',
            }}>
                Question Allocation
            </h1>
            <Row
                gutter={[0, 10]}
                style={{
                    width: isMobileOrDesktop ? '100%' : '80%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {currentQuestions.map((question, index) => (
                    <Col span={6} key={question.id} {...resultResponsive}>
                        <QuestionComponent
                            question={question.statement}
                            onClick={() => handleQuestionClick(index)}
                            isMobileOrDesktop={isMobileOrDesktop}
                            isCurrentQuestion={selectedQuestionIndex === index}
                        />
                    </Col>
                ))}
            </Row>

            <div>
                <button style={nextButtonStyles} onClick={handlePreviousQuestions}>Previous</button>
                <span style={{
                    margin: '0 10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    width: '50px',
                    display: 'inline-block',
                    textAlign: 'center',
                }}>
                    {currentPage}/{questionsData.length / 4}
                </span>
                <button style={nextButtonStyles} onClick={handleNextQuestions}>Next</button>
            </div>


            {selectedQuestionIndex !== null && (
                <>
                    <div style={answerContainerStyles}>
                        <div
                            style={{
                                marginBottom: '20px',
                                height: '70px',
                                width: isMobileOrDesktop ? '100vh' : '300px',
                            }}>
                            <h2>Selected Question:</h2>
                            <h3>{currentQuestions[selectedQuestionIndex].statement}</h3>
                        </div>
                        <h3>Answer:</h3>
                        <div
                            style={!isMobileOrDesktop ? centerStyle : notCenterStyle}
                        >
                            <button
                                style={{
                                    ...answerButtonStyles,
                                    backgroundColor: questionsData[(currentPage * 4) - 4 + selectedQuestionIndex].answer === 'Yes' ? '#982bc4' : '#d5def5',
                                    color: questionsData[(currentPage * 4) - 4 + selectedQuestionIndex].answer === 'Yes' ? 'white' : 'black',
                                }}
                                onClick={() => handleAnswerSubmission('Yes')}>Yes</button>
                            <button
                                style={{
                                    ...answerButtonStyles,
                                    backgroundColor: questionsData[(currentPage * 4) - 4 + selectedQuestionIndex].answer === 'No' ? '#982bc4' : '#d5def5',
                                    color: questionsData[(currentPage * 4) - 4 + selectedQuestionIndex].answer === 'No' ? 'white' : 'black',
                                }}
                                onClick={() => handleAnswerSubmission('No')}>No</button>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <button style={nextButtonStyles} onClick={completeAnswer}>Complete</button>
                    </div>
                </>
            )}

            {/* Complete button */}

        </div>
    );
};

export default QuestionAllocation;
