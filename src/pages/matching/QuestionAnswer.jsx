import React, { useEffect } from 'react';
import questions from './question.json';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

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

const disabledButtonStyles = {
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
    opacity: '0.5',
};

function QuestionAnswer() {

    const navigate = useNavigate();

    const [question, setQuestion] = React.useState();
    const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);
    const [api, contextHolder] = notification.useNotification();


    const openNotificationWithIcon = (type) => {
        api[type]({
          message: type === 'success' ? 'Congratulations!' : 'Unfortunately',
          description:
            type === 'success'
                ? 'Your answer is correct! You have been matched with the company and you may contact them for further information.'
                : 'Your answer is incorrect. You will be navigated to the previous page in 3 seconds.',
          placement: 'bottomRight',
        });
      };


    //Random choose one question
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setQuestion(questions[randomIndex]);
    }, []);

    const handleAnswerSubmission = (answer) => {
        setIsButtonDisabled(true);
        if (answer === question.answer) {
            //Do something when answer is Yes
            console.log("congratulations");
            openNotificationWithIcon('success');

        } else {
            //Do something when answer is No
            console.log("unfortunately");
            openNotificationWithIcon('error');
            setTimeout(() => {
                navigate(-1);
            }, 3000);
        }
    }

    return (
        <>
            <div>
                <h2>Answer question to get matched with the company.</h2>
                <br />
                <h3>{question?.question}</h3>
                <button
                    style={isButtonDisabled ? disabledButtonStyles : answerButtonStyles}     
                    disabled={isButtonDisabled}
                    onClick={() => handleAnswerSubmission('Yes')}>Yes</button>
                <button
                    style={isButtonDisabled ? disabledButtonStyles : answerButtonStyles}
                    disabled={isButtonDisabled}
                    onClick={() => handleAnswerSubmission('No')}>No</button>

            </div>
            {contextHolder}
        </>
    );
}

export default QuestionAnswer;