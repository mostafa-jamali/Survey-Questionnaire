import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Background from '../Background/Background';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import StartPage from '../../views/StartPage/StartPage';
import Questions from '../../views/Questions/Questions';
import Answers from '../Answers/Answers';
import './Start.scss'


function Start() {
    const [initialData, setInitialData] = useState({});

    useEffect(() => {
        setInitialData({
            organization_name: "Snapp",
            organization_name_fa: "اسنپ",
            intro: "فرم نظر سنجی و ارتقا سطح خدمت رسانی",
            logo_url: "https://snapp.ir/assets/images/logo/logo.png",
            background_url: `https://picsum.photos/${window.innerWidth}/${window.innerHeight}/?blur=10`,
            questions: [
                {
                    id: "soal-1",
                    text: "آیا از خدمات مشتریان راضی هستید ؟",
                    options: [
                        { key: 1, text: "عالیه" },
                        { key: 2, text: "خوبه" },
                        { key: 3, text: "ضعیفه" },
                    ]
                },
                {
                    id: "soal-2",
                    text: "از هزینه‌های سفرها راضی هستید ؟",
                    options: [
                        { key: 1, text: "بله" },
                        { key: 2, text: "تقریبا" },
                        { key: 3, text: "اصلا" },
                    ]
                },
                {
                    id: "soal-3",
                    text: "میزان تأخیر راننده تا رسیدن به مبدأ شما چقدر است ؟",
                    options: [
                        { key: 1, text: "زیاد" },
                        { key: 2, text: "متوسط" },
                        { key: 3, text: "کم" },
                    ]
                },
                {
                    id: "soal-4",
                    text: "در مجموع از کیفیت خدمات اسنپ رضایت دارید ؟",
                    options: [
                        { key: 1, text: "بله" },
                        { key: 2, text: "تقریبا" },
                        { key: 3, text: "خیر" },
                    ]
                },
            ]
        })
    }, []);

    return (
        <Router>
            <Container id="main" fluid={true} className="d-flex flex-column alin-items-center">
                <Background Background={initialData.background_url} />
                <Switch>
                    <Route exact path="/">
                        <StartPage initialData={initialData} questoinId={initialData.questions} />
                    </Route>

                    <Route path="/questions/:id" render={props => (<Questions {...props} initialData={initialData} Questions={initialData.questions} />)} />
                    <Route path="/questions-result" component={Answers} />
                </Switch>
            </Container>
        </Router>
    );
}

export default Start
