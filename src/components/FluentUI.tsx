import * as React from 'react';
import { Button, Text, Dropdown, Option, makeStyles, shorthands, useId,  Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, SplitButton,MenuButton } from '@fluentui/react-components';
import { AccessTimeFilled } from '@fluentui/react-icons';
import { Link } from 'react-router-dom';
import type { DropdownProps } from "@fluentui/react-components";

// Define a style hook using Fluent UI's makeStyles function
const useStyles = makeStyles({
  root: {
    // Stack the label above the field with a gap
    display: 'grid',
    gridTemplateRows: 'repeat(1fr)',
    justifyItems: 'start',
    ...shorthands.gap('2px'),
    maxWidth: '400px',
  },
});

export const FluentUI = () => {
  // Generate a unique ID for the dropdown
  const dropdownId = useId('dropdown-default');
  const options = [
    'Cat',
    'Caterpillar',
    'Corgi',
    'Chupacabra',
    'Dog',
    'Ferret',
    'Fish',
    'Fox',
    'Hamster',
    'Snake',
  ];
  const styles = useStyles();
  const additionalClass = 'FluentUIPage';
  const combinedClassName = `${styles.root} ${additionalClass}`;

  return (
    <div className={combinedClassName}>
      {/* Navigation links */}
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
      
      {/* Button components */}
      <Button appearance="primary" icon={<AccessTimeFilled />}>
        Click me
      </Button>
      <Button>Example</Button>

      {/* Text component */}
      <Text block>
        This is an example of the Text component's usage.
      </Text>

      {/* Dropdown components */}
      <div>
        <label htmlFor={dropdownId}>Select an animal:</label>
        <Dropdown id={dropdownId} placeholder="Choose an option">
          {options.map((option, index) => (
            <Option key={index} disabled={option === 'Snake'}>
              {option}
            </Option>
          ))}
        </Dropdown>
      </div>

      {/* Another Dropdown with a different label */}
      <div>
        <label id={dropdownId}>Best pet:</label>
        <Dropdown aria-labelledby={dropdownId} placeholder="Select an animal">
          {options.map(option => (
            <Option key={option} disabled={option === 'Ferret'}>
              {option}
            </Option>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default FluentUI;
