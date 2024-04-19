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
            <MenuItem><Link to="/child">Go to Child</Link></MenuItem>
            <MenuItem><Link to="/promise">Go to PromisesAsyncAwait</Link></MenuItem>
            <MenuItem><Link to="/fluentui">Go to FluentUI</Link></MenuItem>
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
