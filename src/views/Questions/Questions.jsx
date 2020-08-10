import React, { useState, useEffect } from 'react';

// stepper: material ui
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';

import SoallyFooter from '../../Components/SoallyFooter/SoallyFooter';
import Logo from '../../Components/Logo/Logo';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import Answers from '../../Components/Answers/Answers';
import './Questions.scss';


/// stepper: material ui
const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 8,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 15,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 10,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 30,
        height: 30,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    return (
        <div className={clsx(classes.root, { [classes.active]: active, [classes.completed]: completed, })} ></div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

function getSteps() {
    return ['', '', '', '', '', ''];
}

function Questions({ initialData, Questions, match }) {
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
        handleNextStepper();
    }
//stepper: material ui
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const handleNextStepper = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
        <div>
            {end ? <Answers ans={ans} />
                :
                <div>
                    <Stepper alternativeLabel activeStep={activeStep} className="stepper" connector={<ColorlibConnector />}>
                        {steps.map((label, index) => (
                            <Step key={index}>
                                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div className="questions">
                        <h1>{question.text}</h1>
                        <div className="col-6 answers">
                            {
                                question.options.map((item) => {
                                    return (
                                        <Button onClick={() => handelClick(question.id, item.key)} key={item.key} className="col-12 col-sm-6 col-md-3 m-2 m-md-2 answer-button" >
                                            {item.text}
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
