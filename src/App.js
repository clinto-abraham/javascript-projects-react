import { hot } from "react-hot-loader/root";
import React from "react";
import "./styles/App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SimpleBackdrop from './components/BackToTop';
import BottomAppBar from './components/MessageApp'
// import your route components too
import MaterialUI from "./components/Material_UI";
import ReactQueryApp from "./components/reactQuery";
import Input from "@mui/material/Input";
import { Counter } from "./features/counter/Counter";
import Home from "./components/Home";
import Query2 from "./components/Query2";
import { Switch } from "./components/Switch";
import SubmittedForm from "./components/SubmittedForm";
import Navbar from "./components/Navbar";

// const ariaLabel = { 'aria-label': 'description' };

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> }>
          <Route path="counter" element={<Counter />} />
          <Route path="material-ui" element={<MaterialUI />}>
            <Route path=":componentId" element={<Switch />} />
            <Route path="input-components" element={<Input />}>
              <Route path="submitted-form" element={<SubmittedForm />} />
            </Route>
          </Route>
          <Route path="/*" element={<Navigate replace to="/" />} />
          <Route path="react-query" element={<ReactQueryApp />}>
            <Route path="query2" element={<Query2 />} />
          </Route>
          <Route path="test" element={<Test />} />
          <Route path="test/nested-test" element={<NestedTest />} />
          
        </Route>
      </Routes>
      <SimpleBackdrop />
      <BottomAppBar />
    </BrowserRouter>
  );
};

export default hot(App);

function Test (){
  return <>Test</>
}

function NestedTest (){
  return <>Nested Test</>
}

// function App() {
//   return (
//     <div className="App">
//       <MaterialUI />
//       <header className="App-header">
//         <div > <img src={require('./Media/toc.jpeg')} alt="top of cliff" className="logo"  /> </div>
//       <span className="tile">
//         <div className="unit-tile"> <Counter  /> </div>
//        <div className="unit-tile"> <ReactQueryApp /> </div>
//        <div className="unit-tile" > <Input placeholder="Placeholder" inputProps={ariaLabel} /></div>
//         </span>

//       </header>

//     </div>
//   );
// }
