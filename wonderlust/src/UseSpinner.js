import React, { useState } from 'react';
import Spinner from '../src/Spinner';

const UseSpinner = prop => {
const [visible, setVisible] = useState(false);

const showSpinner = () => setVisible(true);
const hideSpinner = () => setVisible(false);
const spinner = visible ? <Spinner/> : null;


return [spinner, showSpinner, hideSpinner];



}

export default UseSpinner;