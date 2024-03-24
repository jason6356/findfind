import React from 'react';
import { CardSwiper } from 'react-card-swiper'
import CompanyList from './CompanyList'
import './JobSwipping.css';
import { useNavigate } from 'react-router-dom';



const Content = () => {
    return (
        <div>
            <h1>Job Title</h1>
            <p>Job Description</p>
            <p>Job Location</p>
        </div>
    )
}

// const mockData = [
//     { id: '88552078', meta: { apk: 'some-apk-a.apk' }, src: '', content: <Content /> },
//     { id: 'fc7e0bd4', meta: { apk: 'some-apk-b.apk' }, src: '', content: <Content /> },
//     { id: 'da9a7067', meta: { apk: 'some-apk-c.apk' }, src: '', content: <Content /> },
// ]

const JobSwipping = () => {
    
    const navigate = useNavigate();
    // Add your component logic here
    const handleDismiss = (el, meta, id, action, operation) => {
        console.log({ el, meta, id, action, operation }) // event data to be handled

        if (action === 'like') {
            navigate('/matching/answer-question');
        }
    }

    const handleFinish = (status) => {
        // console.log(status) // 'finished'
    }

    const handleEnter = (el, meta, id) => {
        // console.log(el, meta, id)
    }

    return (
        <CardSwiper
            data={CompanyList}
            onEnter={handleEnter}
            onFinish={handleFinish}
            onDismiss={handleDismiss}
            withActionButtons
            withRibbons
            likeRibbonText="LIKE"
            dislikeRibbonText="DISLIKE"
            ribbonColors={{ bgLike: 'green', bgDislike: 'red', textColor: 'white' }}
            emptyState={
                <div>
                    {/* <Box component={'img'} width={250} src={EmptyState} /> */}
                    <p>
                        You've reached the <br /> end of the list
                    </p>
                </div>
            }
        />
    );
};

export default JobSwipping;