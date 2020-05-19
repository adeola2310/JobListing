import React, {Component} from 'react';
import './Job-card.css';

class JobCard extends Component {

    render() {
        const allLanguage = this.props.jobListing.languages.map((language) =>
                <span className="btn">{language}</span>
            );

        return (
            <div className="card">
               <div className="content">
                <div className="name">
                    <img src={this.props.jobListing.logo} alt="profile" style={{width: '25%'}}/>
                 <div className="name-details">
                     <div className="top">
                         <p style={{fontSize:'.5rem', color: 'teal'}}>{this.props.jobListing.company}</p>
                          <button className="new">{this.props.jobListing.new}</button>
                          <button className="new">{this.props.jobListing.featured}</button>
                     </div>
                     <p style={{fontSize:'0.8rem', marginTop: '5px'}}>{this.props.jobListing.position}</p>
                     <div className="lower">
                         <p style={{fontSize:'.6rem', color: '#ccc'}} className="lower-class">{this.props.jobListing.postedAt}</p>
                         <p style={{fontSize:'.6rem', color: '#ccc'}} className="lower-class"> . {this.props.jobListing.location}</p>
                         <p style={{fontSize:'.6rem', color: '#ccc'}} className="lower-class">. {this.props.jobListing.contract}</p>
                     </div>
                 </div>
                </div>
                   <div className="language">
                       {allLanguage}
                   </div>
               </div>
            </div>
        );
    }
}


export default JobCard;
