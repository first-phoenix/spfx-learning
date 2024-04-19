import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Text, Dropdown, Option, makeStyles, shorthands, useId } from '@fluentui/react-components';


function ChildComponent({ data, updateData }) {
  return (
    <div className='ChildPage'>
      <Button appearance="primary"><Link to="/">Go to Parent</Link></Button>

      <h2>Child Component</h2>
      <p>Received Data: {data}</p>

      {/* Button to update the data using the function passed as a prop */}
      <Button onClick={() => updateData('Data updated from Child')}>
        Update Data
      </Button>
    </div>
  );
}

export default ChildComponent;
