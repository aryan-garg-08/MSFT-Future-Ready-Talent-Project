import '../styles/Bot.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { GiHealthPotion } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

const Bot = () => {
    document.title = "Healify Bot | A Health Bot To Answer Your Questions!!!";
    const [openBot, setOpenBot] = useState(false);

    const clickOpenBot = () => {
        setOpenBot(true);
    }

    const clickCloseBot = () => {
        setOpenBot(false);
    }

    return (
        <>
            <div className="container">
                {!openBot && <div className="head">
                    <h3>Healify Bot</h3>
                </div>}
                {!openBot && <div className="head">
                    <h3>
                        <Link to="/">Go To CSS Box Shadow Generator</Link>
                    </h3>
                </div>}
                <div className="desc">
                    {!openBot && <p>Healify: Your AI-powered personal health companion, offering tailored guidance, support, and personalized recommendations for fitness, nutrition, and emotional well-being. Track progress, set goals, and optimize health with an intuitive interface. Empowering you to take control and achieve a healthier, happier life.</p>}
                    {!openBot && <button onClick={clickOpenBot}><GiHealthPotion />&nbsp; Chat With Our Health Bot</button>}
                    {openBot && <button button id="close" onClick={clickCloseBot}><AiFillCloseCircle />&nbsp; Close Bot</button>}
                </div>
                {openBot
                    &&
                    <div className="bot">
                        <iframe title="AG-ChatBot" src='https://webchat.botframework.com/embed/health-bot-ag-ugqceux?s=nFbz2MvEdh8.z37rYEhuBLwYU1Y-AiKMPae1b5tuaLK7p0YYdp1fBn8' style={{ minWidth: '400px', width: '50%', minHeight: '400px' }} />
                    </div>
                }
                <div className="foot">
                    <p>Powered by Microsoft Azure Health Bot | &copy; Created By Aryan Garg @2023</p>
                </div>
            </div >
        </>
    );
}

export default Bot;
