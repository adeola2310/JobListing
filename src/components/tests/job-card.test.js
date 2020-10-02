import React from "react";
import {shallow, mount, render} from 'enzyme';
import JobCard from "../Job-card/Job-card";


it('should render the JobCard component',  () =>{
    // using enzyme shallow
    // expect(shallow(<JobCard/>).length).toEqual(1)

    expect(shallow(<JobCard/>)).toMatchSnapshot();
}); 