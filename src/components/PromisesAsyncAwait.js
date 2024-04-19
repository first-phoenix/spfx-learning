import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Text, Dropdown, Option, makeStyles, shorthands, useId,  Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, SplitButton,MenuButton } from '@fluentui/react-components';


function PromisesAsyncAwait() {
  const [result, setResult] = useState('');

  // Function to simulate an asynchronous operation using a Promise
  const simulateAsyncOperation = (success = true) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve('Operation succeeded');
        } else {
          reject('Operation failed');
        }
      }, 2000); // Simulate a 2-second delay
    });
  };

  // Function to demonstrate promise chaining
  const handlePromiseChaining = () => {
    // Simulate an async operation using a Promise
    simulateAsyncOperation()
      .then((message) => {
        // Handle fulfilled state
        console.log('First operation:', message);
        return simulateAsyncOperation(); // Another async operation
      })
      .then((message) => {
        // Handle fulfilled state of the second operation
        console.log('Second operation:', message);
        setResult('Promise chaining completed successfully');
      })
      .catch((error) => {
        // Handle rejected state
        console.error('Error:', error);
        setResult('Promise chaining failed');
      });
  };

  // Function to demonstrate async/await
  const handleAsyncAwait = async () => {
    try {
      // Use await to pause execution until the Promise is resolved
      const firstMessage = await simulateAsyncOperation();
      console.log('First operation (async/await):', firstMessage);

      // Execute another asynchronous operation using await
      const secondMessage = await simulateAsyncOperation();
      console.log('Second operation (async/await):', secondMessage);

      setResult('Async/Await operations completed successfully');
    } catch (error) {
      // Handle any errors that occur
      console.error('Error (async/await):', error);
      setResult('Async/Await operations failed');
    }
  };

  return (
    <div>
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
      <h2>Promises and Async/Await</h2>

      {/* Button to trigger promise chaining */}
      <Button onClick={handlePromiseChaining}>
        Demonstrate Promise Chaining
      </Button>

      {/* Button to trigger async/await */}
      <Button onClick={handleAsyncAwait}>
        Demonstrate Async/Await
      </Button>

      {/* Display result */}
      <p>Result: {result}</p>
    </div>
  );
}

export default PromisesAsyncAwait;
