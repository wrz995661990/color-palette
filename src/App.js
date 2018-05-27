import React, { Component } from 'react';
import Lvxinyu_xiaoduzi from "./lvlvlvlv/Lvxinyu_xiaoduzi.jsx"
import "./App.css"
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      r : 0,
      g : 0,
      b : 0
    }

    this.bars = ["r","g","b"].map((item,index)=>{
      return <Lvxinyu_xiaoduzi key={index} v={this.state[item]} color={item} setColor={(this.setColor).bind(this)} />
    })
  }
  //设置函数
  setColor(color,value){
    this.setState({[color] : value});
  }
  render() {
    return (
      <div className="App">
        <div className="box" style={{"backgroundColor" : `rgb(${this.state.r},${this.state.g},${this.state.b})`}}></div>
        {this.bars}
      </div>
    );
  }
}

export default App;
