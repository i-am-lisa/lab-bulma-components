import React from 'react';
import 'bulma/css/bulma.css';

import Navbar from './navbar/Navbar.js'
import FormField from './formfields/FormField.js'
import CoolButton from './buttons/Button.js'



const App = () => {
  return (
  
  <React.Fragment>
    <Navbar/>
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. maxmustermann@gmail.com" />
 
  <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
<CoolButton isSmall isSuccess>Button 2</CoolButton>
  

    </React.Fragment>
  )
};


export default App;

