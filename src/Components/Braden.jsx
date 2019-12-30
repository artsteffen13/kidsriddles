import React, {useState} from 'react'
import Form from './Form'

const Braden = () => {
    const [bradenAnswer, setBradenAnswer] = useState({
        braden1:'',
        braden2:'',
        braden3:''
    });
    const bradenArray = Object.values(bradenAnswer);

    const answer = (item) => {
        if (item === 'The north sea') {
            setBradenAnswer(prevAnswers => {
                return {...prevAnswers, braden1: 'You think about me all day'}
            })
        } else if (item === '7') {
            setBradenAnswer(prevAnswers => {
                return {...prevAnswers, braden2: 'You probably couldn\'t live without me'}
            })
        } else if (item === 'Aberforth') {
            setBradenAnswer(prevAnswers => {
                return {...prevAnswers, braden3: 'Search under my glowing light to find your treasure'}
            })
        } else {
            alert('You are SOOOOOO wrong!')
        }
    };


    return (
        <div className="animated jackInTheBox space" style={{background: "linear-gradient(to bottom left, black, blue 80%, black) no-repeat", textShadow: "2px 2px 5px black"}}>
            <Form
                question='Where is Azkaban fortress located?'
                getAnswer={answer}
                id="The north sea"
            />
            {/*<h2>{bradenAnswer.braden1}</h2>*/}
            <Form
                question="How many departments does the Ministry of Magic have?"
                getAnswer={answer}
                id='7'
            />
            {/*<h2>{bradenAnswer.braden2}</h2>*/}
            <Form
                question="What is the name of Albus Dumbledore's brother?"
                getAnswer={answer}
                id='Aberforth'
            />
            {/*<h2>{bradenAnswer.braden3}</h2>*/}

            {bradenArray.map(item => (
                <h2>{item}</h2>
            ))}

        </div>
    )
};

export default Braden