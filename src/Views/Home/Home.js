import React, {useEffect} from 'react';

// reactstrap components
import Header from './Components/Header';
import Chart from './Components/Chart';
import Intro from './Components/Intro';
import Functionalities from './Components/Functionalities';
import Sources from './Components/Sources';
import Demo from './Components/Demo';

const HomeView = () => {

    useEffect(() => {
        document.body.classList.toggle("index-page");
    });

    return(
        <div>
            <Header />
            <Chart />
            <Intro />
            <Functionalities />
            <img alt="..." className="path" src={require("assets/img/blob.png")} />
            <Sources />
            <Demo />
        </div>
    );
}

export default HomeView;
