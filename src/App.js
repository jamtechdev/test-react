import './App.css';
import Header from "./components/Header"
import InnerSection from './components/InnerSection';
import Slider from './components/Slider';
import Footer from './components/Footer';
import jobsService from "./services/jobs.service";
import {useEffect} from "react";

function App() {
    let jobList;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function _fetch() {
        jobsService.getJobs().then(({data: {jobs}}) => {
            jobList = jobs;
            console.log(jobList);
        });
    }
    useEffect(() => {
        _fetch();
    }, [_fetch, jobList])

    return (
        <div>
            <Header/>
            {jobList && jobList.length ?
                (<InnerSection jobs={jobList}/>) :
                (<p>Loading...</p>)
            }
            <Slider/>
            <Footer/>
        </div>
    );
}

export default App;
