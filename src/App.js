import React ,{Component} from 'react'
import FirstComponent ,{SecondComponent} from './components/learning-example/FirstComponent'
import EmployeTable ,{TableRow,Header} from './components/learning-example/EmployeTable'
import Welcome  from './components/learning-example/Welcome'
import Hello  from './components/learning-example/Hello'
import Bye  from './components/learning-example/Bye'
import Message from './components/learning-example/Message'
import logo from './logo.svg';
import Counter from './components/learning-example/Conter'
import Welocome2 from './components/learning-example/Welcome2'
import Welcome0 from './components/learning-example/Welcome0'
import FunctionClick from './components/learning-example/FunctionClick'
import './App.css';
import ClassClick from './components/learning-example/ClassClick'
import EventBind from './components/learning-example/EventBind'
import BindInRender from './components/learning-example/BindInRender'
import ArrowFnBind from './components/learning-example/ArrowFnBind'
import BindInConstructor from './components/learning-example/BindInConstructor'
import BindInClassProp from './components/learning-example/BindInClassProp'
import ParentComponent from './components/learning-example/ParentComponent'
import UserGreating from './components/learning-example/UserGreating'
import NameList from './components/learning-example/NameList'
import PersonList from './components/learning-example/PersonList'
import ParentComponent1 from './components/learning-example/ParentComponent1';
import Form from './components/learning-example/Form';
import LifeCycleA from './components/learning-example/LifeCycleA';
import LifeCycleUpdateB from './components/learning-example/LifeCycleUpdateB';
import LifeCycleUpdate from './components/learning-example/LifeCycleUpdate';
import FragmentDemo from './components/learning-example/FragmentDemo';
import Table from './components/learning-example/Table';
import PureComp from './components/learning-example/PureComp';
import ParentComp from './components/learning-example/ParentComp';
import ReRefsDemo from './components/learning-example/RefsDemo'
import InputFocus from './components/learning-example/InputFocus';
import FRParentInput from './components/learning-example/FRParentInput';
import PortalDemo from './components/learning-example/PortalDemo';
import Hero from './components/learning-example/Hero';
import ErrorBoundary from './components/learning-example/ErrorBoundary';
import ClickCounter from './components/learning-example/ClickCounter';
import HoverCounter from './components/learning-example/HoverCounter';
import ClickCounterTwo from './components/learning-example/ClickCounterTwo';
import HoverCounterTwo from './components/learning-example/HoverCounterTwo';
import User from './components/learning-example/User';
import CounterTwo from './components/learning-example/CounterTwo';
import PostList from './components/learning-example/PostList';
import PostForm from './components/learning-example/PostForm'
function App() {
  return (
    <div className="App">
     
      <PostForm/>
      <PostList/>
  

 {/*
  <PostList/>
  <CounterTwo  render={(count,increamentCount)=><ClickCounterTwo count={count} increamentCount={increamentCount}></ClickCounterTwo>}> </CounterTwo>
   <CounterTwo render={(count,increamentCount)=><HoverCounterTwo count={count} increamentCount={increamentCount}></HoverCounterTwo>}></CounterTwo>
 <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo></HoverCounterTwo>
      <User render={(isLogedIn)=> isLogedIn ? 'shiva' :'Guest'}></User>
 <ClickCounter name="Shiva"/>
      <HoverCounter/>
  <ErrorBoundary>
     <Hero heroName="Batman"/>
     </ErrorBoundary>
     <ErrorBoundary>
     <Hero heroName="Thor"/>
     </ErrorBoundary>
     <ErrorBoundary>
     <Hero heroName="Joker"/>
     </ErrorBoundary>
  <PortalDemo></PortalDemo>
  <FRParentInput></FRParentInput>
  <InputFocus></InputFocus>
 <ReRefsDemo></ReRefsDemo>
  <ParentComp></ParentComp>
   <PureComp></PureComp>
  <Table></Table>
    <FragmentDemo/>
 <LifeCycleUpdate/>
  <LifeCycleA></LifeCycleA>
  <Form/>
   <ParentComponent1></ParentComponent1>
      <NameList/>
 <PersonList/>
  <NameList/>
  <UserGreating/>
  <ParentComponent/>
   <BindInClassProp/>
 <BindInConstructor></BindInConstructor>
  <ArrowFnBind></ArrowFnBind>
   <BindInRender></BindInRender>
 <EventBind></EventBind>
 <Welocome2 java="A" react='R'></Welocome2> 
 <ClassClick></ClassClick>
<Bye name="Shiva"/> 
    <Bye name="Shiva"/>  <EventBind></EventBind> 
 <FunctionClick></FunctionClick>
 <Counter></Counter>
 <Welocome2 java='JAVA' react='REACT'></Welocome2>
 <Welcome0 name='Shiva' id='408'></Welcome0>*/}
   {/*
     <Message></Message>
      <Hello/>
    Hello Application
    <Welcome name="Shiva" state='Younger'>
    <p>This is from child....</p>
    </Welcome>
    <Welcome name="Satish" state='Elder'/>
    <FirstComponent/>
    <SecondComponent/>
    <ThirdComponent/>
    <Header></Header>
    <Bye name="Shiva"/>
    <Bye name="Satish"/>
   <EmployeTable/>*/}
    </div>
  );
}





function ThirdComponent(){
  return(
<div className="thirdComponent">
      Third Component
      </div>
  );
}
export default App;
