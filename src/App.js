
import React, {Component} from 'react';
import './App.css';
import './Store';
import Header from "./components/Header/Header";
import JobCard from "./components/Job-card/Job-card";
import {data} from "./Store";

class App extends Component {
    state = {
        jobListing: data,
        loaders: false
    }
    componentDidMount() {
        console.log(this.state.jobListing);
    }

    render() {
        let job = this.state.jobListing.map((jobListing) => {
            return(
                <JobCard jobListing={jobListing} key={jobListing.id} />
            );
        });

        return (
            <div className="App">
                <Header/>

                     <div className="container">
                         {job}
                     </div>
            </div>
        );
    }
}

export default App;
