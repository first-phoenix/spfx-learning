import React, { useState } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import ParentComponent from './components/ParentComponent.tsx';
import ChildComponent from './components/ChildComponent';
import PromisesAsyncAwait from './components/PromisesAsyncAwait';
import FluentUI from './components/FluentUI.tsx';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';


function App() {
  return (
    <FluentProvider theme={webLightTheme}>
    <div>
      <Routes>
        <Route exact path="/" Component={ParentComponent} />
        <Route exact path="/child" Component={ChildComponent} />
        <Route exact path="/promise" Component={PromisesAsyncAwait} />
        <Route exact path="/fluentui" Component={FluentUI} />
      </Routes>
      {/* <ParentComponent/> */}
    </div>
    </FluentProvider>
  );
}

export default App;
