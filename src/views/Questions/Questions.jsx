import React, { useState, useEffect } from 'react'
import SoallyFooter from '../../Components/SoallyFooter/SoallyFooter';
import Logo from '../../Components/Logo/Logo';
import { Row, Col, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom';
import Answers from '../../Components/Answers/Answers'
import './Questions.scss';


function Questions({ initialData, Questions, match, setStartEndPage }) {
    const history = useHistory();
    const [question, setQuestion] = useState({ options: [] })
    const [end, setEnd] = useState(false)
    const [ans, setAns] = useState({})

    let id = +match.params.id - 1;

    useEffect(() => {
        if (Questions && id < Questions.length) {
            setQuestion(Questions[id])
        } else if (Questions && id == Questions.length) {
            console.log(Object.keys(ans).map((key) => ans[key]));
            setEnd(true)
        } else {
            history.push("/questions-result")
        }
    }, [history.location.pathname])

    const handelNext = () => {
        history.push(`${+match.params.id + 1}`)
    }
    const handelClick = (id, answer) => {
        setAns({ ...ans, [+match.params.id]: { id, answer } })
        handelNext();
    }

    return (
        <div>
            {end ? <Answers ans={ans} />
                :
                <div>
                    <div className="stepper"></div>
                    <div className="questions">
                        <h1>{question.text}</h1>
                        <div className="col-6 answers">
                            {
                                question.options.map((current, index) => {
                                    return (
                                        <Button onClick={() => handelClick(question.id, current.key)} key={current.key} className="col-12 col-sm-6 col-md-3 m-2 m-md-2 answer-button" >
                                            {current.text}
                                        </Button>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            }


            <div>
                <SoallyFooter />
                <Logo logoSrc={initialData.logo_url} />
            </div>
        </div>
    )
}

export default Questions
