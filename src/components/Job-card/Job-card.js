import React, {Component} from 'react';
import './Job-card.css';

class JobCard extends Component {

    render() {
        const allLanguage = this.props.jobListing?.languages.map((language, id) =>
            <span className="btn" key={id}>{language}</span>
        );


        const newTag = this.props.jobListing?.new === true ? <button className="new">NEW</button> : '';
        const feature = this.props.jobListing?.featured === true ? <button className="feature">FEATURE</button> : '';


        return (
            <div className="card">
                <div className="content">
                    <div className="name">
                        <img src={this.props.jobListing?.logo} alt="profile" style={{width: '25%'}} className="logo"/>
                        <div className="name-details">
                            <div className="top">
                                <p style={{fontSize: '.5rem', color: 'teal'}}>{this.props.jobListing?.company}</p>
                                {/*<button className="new">{newTag}</button>*/}
                                {/*<button className="new">{feature}</button>*/}
                                {newTag}
                                {feature}
                            </div>
                            <p className="position"
                               style={{fontSize: '0.8rem', marginTop: '5px'}}>{this.props.jobListing?.position}</p>
                            <div className="lower">
                                <p style={{fontSize: '.6rem', color: '#ccc'}}
                                   className="lower-class">{this.props.jobListing?.postedAt}</p>
                                <p style={{fontSize: '.6rem', color: '#ccc'}}
                                   className="lower-class"> . {this.props.jobListing?.location}</p>
                                <p style={{fontSize: '.6rem', color: '#ccc'}}
                                   className="lower-class">. {this.props.jobListing?.contract}</p>
                            </div>
                        </div>
                    </div>
                    <div className="underline"></div>
                    <div className="language">
                        <span className="btn">{this.props.jobListing?.role}</span>
                        <span className="btn">{this.props.jobListing?.level}</span>
                        {allLanguage}
                    </div>
                </div>
            </div>
        );
    }
}


export default JobCard;
