import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Background from '../Background/Background';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import StartPage from '../../views/StartPage/StartPage';
import Questions from '../../views/Questions/Questions';
import './Start.scss';


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
                    text: "از کارکرد کلی اپلیکیشن مسافر اسنپ راضی هستین ؟",
                    options: [
                        { key: 1, text: "بله" },
                        { key: 2, text: "خیر" },
                        { key: 3, text: "تا حدودی" },
                    ]
                },
                {
                    id: "soal-2",
                    text: "نرخ اعلام شده اسنپ برای جابه جایی از بقیه اپ های مشابه بیشتر است؟ ",
                    options: [
                        { key: 1, text: "بله" },
                        { key: 2, text: "خیر" },
                        { key: 3, text: "فرقی نداره" },
                    ]
                },
                {
                    id: "soal-3",
                    text: "به نظر شما امتیاز دادن به راننده اثری داشته تا حالا؟",
                    options: [
                        { key: 1, text: "آره" },
                        { key: 2, text: "نظر ندارم" },
                        { key: 3, text: "نه" },
                    ]
                },
                {
                    id: "soal-4",
                    text: "از چه طریقی با اسنپ آشنا شدید؟",
                    options: [
                        { key: 1, text: "دوستان" },
                        { key: 2, text: "سایت‌ها" },
                        { key: 3, text: "سایر" },
                    ]
                },
                {
                    id: "soal-5",
                    text: "در چه مکان‌هایی بیشتر درخواست اسنپ میدین؟",
                    options: [
                        { key: 1, text: "خانه" },
                        { key: 2, text: "دانشگاه" },
                        { key: 3, text: "محل کار" },
                    ]
                },
                {
                    id: "soal-6",
                    text: "به نظر خودتون اسنپ رو به دیگران پیشنهاد میدین ؟",
                    options: [
                        { key: 1, text: "خیر" },
                        { key: 2, text: "بله" },
                        { key: 3, text: "شاید" },
                    ]
                },
            ]
        })
    }, []);

    return (
        <Router>
            <Container fluid={true} className="d-flex flex-column alin-items-center">
                <Background Background={initialData.background_url} />
                <Switch>
                    <Route path="/questions/:id" render={props => (<Questions {...props} initialData={initialData} Questions={initialData.questions} />)} />
                    <Route path="/">
                        <StartPage initialData={initialData} questoinId={initialData.questions} />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
}

export default Start
