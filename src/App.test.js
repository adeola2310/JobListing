import React from 'react';
import {shallow} from "enzyme";
import Header from "./components/Header/Header";




it('should render the Header component',  () =>{
  expect(shallow(<Header/>).length).toEqual(1)
});