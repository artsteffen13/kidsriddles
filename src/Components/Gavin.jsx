import React, {useState} from 'react'
import Form from './Form'

const Gavin = () => {
    const [gavinAnswer, setGavinAnswer] = useState({
        gavin1:'',
        gavin2:'',
        gavin3:''
    });

    const answer = (item, id) => {
        if (item === id && id === 'Count dooku') {
            setGavinAnswer(prevAnswers => {
               return {...prevAnswers, gavin1: 'I handle the dirty work'}
            })
        } else if (item === id && id === 'Ugnaughts') {
            setGavinAnswer(prevAnswers => {
                return {...prevAnswers, gavin2: 'Make room for my coming'}
            })
        } else if (item === id && id === 'May the force be with you') {
            setGavinAnswer(prevAnswers => {
                return {...prevAnswers, gavin3: 'Summon me and your prize will be revealed'}
            })
        } else {
            alert('You are SOOOOOO wrong!');
        }
    };


    return (
        <div className="animated jackInTheBox space" style={{background: "linear-gradient(to bottom left, black, red 80%, black) no-repeat", color: "white", textShadow: "2px 2px 5px black"}}>
            <Form
                question='Who is Darth Tyranus also known as?'
                getAnswer={answer}
                id="Count dooku"
            />
            <h2>{gavinAnswer.gavin1}</h2>
            <Form
                question="What is the species of the diminutive workers on Cloud City who helped freeze Han Solo in carbonite?"
                getAnswer={answer}
                id='Ugnaughts'
            />
            <h2>{gavinAnswer.gavin2}</h2>
            <Form
                question="What were the last words spoken in The Empire Strikes Back?"
                getAnswer={answer}
                id='May the force be with you'
            />
            <h2>{gavinAnswer.gavin3}</h2>
        </div>
    )
};

export default Gavin