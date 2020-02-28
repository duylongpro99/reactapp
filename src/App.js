import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

class NumberOne extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">
          <img className="card-img-top" src={this.props.linkimage} alt="" />
          <div className="class-body">
            <h4 className="class-title">
              {this.props.tieude}
            </h4>
            <p className="class-text">Text</p>
          </div>
        </div>
      </div>
    );
  }
}

function Two(props){
  return (
    <div>
      <p>Some thing just like this ok? {props.yourname}</p>
    </div>
  );
}

class Content extends Component {
  componentWillMount() {
    console.log('Component WILL MOUNT!')
 }
 componentDidMount() {
    console.log('Component DID MOUNT!')
 }
 componentWillReceiveProps(newProps) {    
    console.log('Component WILL RECIEVE PROPS!')
 }
 shouldComponentUpdate(newProps, newState) {
    return true;
 }
 componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
 }
 componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
 }
 componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
 }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

class AppOne extends Component { 
  constructor(props){
    super(props);
    this.state ={
      data : "Initial data..."
    }
    this.updateState = this.updateState.bind(this);
  };
  updateState(e){
    this.setState({data: e.target.value});
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.data} onChange = {this.updateState}/>
        <h4>{this.state.data}</h4>
        <br />
        <ContentAppOne myDataProp ={this.state.data} updateStateProp ={this.updateState} ></ContentAppOne>
      </div>
    );
  }
}
// FORM
class ContentAppOne extends Component {
  render() {
    return (
      <div>
        <input type="text" value ={this.props.myDataProp} onChange={this.props.updateStateProp}/>
        <h3>{this.props.myDataProp}</h3>
      </div>
    );
  }
}

//EVENTS
class EventComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: "Initial data",
      data1: "Something"
    };
    this.updateState = this.updateState.bind(this);
    this.updateStateProp = this.updateStateProp.bind(this);
  };
  updateStateProp(){
    this.setState({data1:"Again Fiex data"});
  }
  updateState(){
    if(this.state.data === "Initial data")
      this.setState({data: "Upload data"});
    else{
      this.setState({data: "Initial data"})
    }
  }

  render() {
    return (
      <div>
        <button onClick = {this.updateState} >Click here</button>
        <h4>{this.state.data}</h4>
        <EventComponentProp fixedData = {this.updateStateProp} mydataprop = {this.state.data1}></EventComponentProp>
      </div>
    );
  }
}

class EventComponentProp extends Component {
  render() {
    return (
      <div>
        <button onClick = {this.props.fixedData}>Click here to fix data</button>
        <p>{this.props.mydataprop}</p>
      </div>
    );
  }
}

//REF

class RefComponent extends Component {
  constructor(props){
    super(props)
    this.state ={
      data: ""
    }
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  updateState(e){
    this.setState({
      data: e.target.value
    });
  }
  clearInput(){
    this.setState({data:''});
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return (
      <div>
        <input value ={this.state.data} onChange ={this.updateState} ref="myInput"></input>
        <button onClick={this.clearInput}>CLEAR</button>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}
 
//KEY
class KeyComponent extends Component {
  constructor(props){
    super(props);
    this.state ={
      data:[
        {
          component: 'First...',
          index : 1
        },
        {
          component: 'Second...',
          index : 2
        },
        {
          component: 'Third...',
          index : 3
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <div>
          {this.state.data.map((dynamicComponent, i)=><KeyContent key = {i} componentData = {dynamicComponent} />)}
        </div>
      </div>
    );
  }
}
class KeyContent extends Component {
  render() {
    return (
      <div>
        <div>{this.props.componentData.component}</div>
        <div>{this.props.componentData.index}</div>        
      </div>
    );
  }
}
// Router
class HomeComponent extends Component {
  render() {
    return (
      <div>
        <h1>Home...</h1>
      </div>
    );
  }
}
class About extends Component {
  render() {
    return (
      <div>
        <h1>About...</h1>
      </div>
    );
  }
}
class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact...</h1>
      </div>
    );
  }
}




class App extends Component {
  constructor(){
    super();
    this.state = {
      data : []
    };
    this.state1 ={
      data1 : 0
    }
    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    this.setNewNumber = this.setNewNumber.bind(this);
  };
  setStateHandler(){
    var item = "set State...";
    var myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({data:myArray});
  };
  forceUpdateHandler(){
    this.forceUpdate();
  }
  findDomNodeHandler(){
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'red';
  }
  //LIFE CYCLE
  setNewNumber(){
    this.setState({data1: this.state1.data1 +1});
    console.log(this.state1.data1);
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Two yourname="Long" />
          <NumberOne tieude="Anh nekkk" linkimage="https://cdnmedia.thethaovanhoa.vn/Upload/3uPkfvAxvuOpUQrmKeiDaA/files/2019/07/C/26/baiferntop.jpg"></NumberOne>
          <br />
          <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
          </div>
          <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
          <h4>Random number: {Math.random()}</h4>
          <button onClick ={this.findDomNodeHandler}>FIND DOM NODE</button>
          <div id="myDiv">NODE</div>
          <br />
          <div>
            <button onClick={this.setNewNumber}>INCREMENT</button>
            <Content />
          </div>
          <br />
          <AppOne></AppOne>
          <br />
          <EventComponent></EventComponent>
          <RefComponent></RefComponent>
          <br />
          <KeyComponent></KeyComponent>
          <br />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            {this.props.children}
        </header>
      </div>
    );
  }
}

export default App;
