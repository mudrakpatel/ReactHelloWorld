import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css"; //importing a regular stylesheet
import Styles from "./appStyles.module.css" //importing a modular stylesheet
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
//import PureComp from './components/PureComponent';
import ParentComp from "./components/ParentComp";
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ForwardRefParentInput from './components/ForwardRefParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Kent" heroName="Dr.Fate"/>
        {/*<Greet/>*/}
        <Welcome/>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Kent" heroName="Dr.Fate"/>
        <Hello/>
        <Message/>
        <Counter/>
        <FunctionClick/>
        <ClassClick/>
        <EventBind/>
        <ParentComponent/>
        <UserGreeting/>
        <NameList/>
        <Stylesheet primary={true}/>
        <Inline/>
        <h1 className="error">Error</h1>
        <h1 className={Styles.success}>Success</h1>
        <div>
          <Form/>
        </div>
        <LifeCycleA/>
        <FragmentDemo/>
        <Table/>
        <ParentComp/>
        {/*<RefsDemo/>*/}
        {/*<FocusInput/>*/}
        <ForwardRefParentInput/>
        <PortalDemo/>
        <ErrorBoundary>
          <Hero heroName="Batman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Dr. Fate"/>
        </ErrorBoundary>
        <ClickCounter name="Bruce"/>
        <HoverCounter name="Clark"/>
        {/*<ClickCounterTwo/>
        <HoverCounterTwo/>
        <User render={(isLoggedIn) => isLoggedIn? "Richard" : "Guest"}/>*/}
        <CounterTwo render={
          (count, incrementCount) =>
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        }/>
        <CounterTwo render={
          (count, incrementCount) =>
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        }/>
        {/*<UserProvider value="Jason">*/}
          <ComponentC/>
        {/*</UserProvider>*/}
      </div>
    );
  }
}

export default App;
