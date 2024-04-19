import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChildComponent from './ChildComponent';
import { Button, Text, Dropdown, Option, makeStyles, shorthands, useId,  Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, SplitButton,MenuButton } from '@fluentui/react-components';
import type { MenuButtonProps } from "@fluentui/react-components";

function ParentComponent() {
  const [data, setData] = useState('Initial data from Parent');

  // Function to update data
  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Data: {data}</p>

      {/* Link to navigate to ChildComponent */}
      <div>
        <Menu>
        <MenuTrigger disableButtonEnhancement>
          <MenuButton>Navigate to Pages</MenuButton>
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <Link to="/"><MenuItem>Go to Parent</MenuItem></Link>
            <Link to="/child"><MenuItem>Go to Child</MenuItem></Link>
            <Link to="/promise"><MenuItem>Go to PromisesAsyncAwait</MenuItem></Link>
            <Link to="/fluentui"><MenuItem>Go to FluentUI</MenuItem></Link>
          </MenuList>
        </MenuPopover>
      </Menu>
      </div>

      {/* Pass data and updateData function as props */}
      <ChildComponent data={data} updateData={updateData} />

      {/* Button to change the data */}
      <Button onClick={() => updateData('Updated data from Parent')}>
        Update Data
      </Button>
    </div>
  );
}

export default ParentComponent;
