import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
        session_length:25,
        minute:"25",
        second:"00",
        break_length:5,
        timer_status:0,
        timer_name:"Session"
    };
  }

  decrementSession= () => {
    if (this.state.session_length===1){
      return ;
    }
    this.setState({
      session_length:this.state.session_length-1,
      second:'00'
    })
    setTimeout(() => {
      this.setState({
        minute:`${this.state.session_length}`
      })
    },100)
  }

  incrementSession = () => {
    if (this.state.session_length===60){
      return ;
    }
    this.setState({
      session_length:this.state.session_length+1,
      second:'00'
    })
    setTimeout(() => {
      this.setState({
        minute:`${this.state.session_length}`
      })
    },100)
  }

  decrementBreak = () => {
    if (this.state.break_length===1){
      return ;
    }
    this.setState({
      break_length:this.state.break_length-1
    })
  }

  incrementBreak = () => {
    if (this.state.break_length===60){
      return ;
    }
    this.setState({
      break_length:this.state.break_length+1
    })
  }

  reset = () => {
    this.setState({
      session_length:25,
      minute:"25",
      second:"00",
      break_length:5
    })
    document.getElementById('beep').pause();
  }

  set_interval_id = 4;

  clockcount = () => {
    if (this.state.second==="00"){
      let k = parseInt(this.state.minute)-1;
      let t = k;
      k = k.toString();
      if (k.length===1){
        k = '0'+k;
      }
      if (t===-1){
        if (this.state.timer_name==="Session"){
            let k = this.state.break_length;
            k = k.toString();
            if (k.length===1){
              k = "0"+k;
            }
            this.setState({
              minute:k,
              second:"00",
              timer_name:"Break"
            })
        }
        else{
            let k = this.state.session_length;
            k = k.toString();
            if (k.length===1){
              k = "0"+k;
            }
            if(this.state.minute==="00" && k==="00"){
              document.getElementById('beep').play();
            }
            this.setState({
              minute:k,
              second:"00",
              timer_name:"Session"
            })
        }
        
      }
      else{
        this.setState(
          {
            minute:k,
            second:"59"
          }
        )
      }
    }
    else{
      let k = parseInt(this.state.second)-1;
      k = k.toString();
      if (k.length===1){
        k = '0'+k;
      }
      this.setState({
        second:k,
      })
    }
  }

  start_stop_timer = () =>{
    if (this.state.timer_status===0){
      this.setState({
        timer_status:1
      })
      this.set_interval_id = setInterval(()=>{
        this.clockcount();
      },1000)
    }
    else{
      clearInterval(this.set_interval_id);
      this.setState({
        timer_status:0
      })
    }
  }

  render(){
    return(
      <div id='app'>
        <div id='mainbox'>
          <p id="heading">25 + 5 Clock</p>
          <div id="length">
            <div id="break-label" className="label">
              <p>Break Length</p>
              <div className="arrows">
                <img src="/decrement.png" className="arrow_image" alt="decrease" id="break-decrement" onClick={this.decrementBreak}/>
                <p id="break-length">{this.state.break_length}</p>
                <img src='/increment.png' className="arrow_image" alt="increase" id="break-increment" onClick={this.incrementBreak}/>
              </div>
            </div>
            <div id="session-label" className="label">
              <p>Session Length</p>
              <div className="arrows">
                <img src='/decrement.png' className="arrow_image" alt="decrease" id="session-decrement" onClick={this.decrementSession}/>
                <p id="session-length">{this.state.session_length}</p>
                <img src='/increment.png' className="arrow_image" alt="increase" id="session-increment" onClick={this.incrementSession}/>
              </div>
            </div>
          </div>
          <div id="timer-label">
            <h1>{this.state.timer_name}</h1>
            <p id="time-left">
              <span>{this.state.minute}:</span>
              <span>{this.state.second}</span>
            </p>
          </div>
          <div id="icons">
            <i className={this.state.timer_status===1 ? "fa-solid fa-pause fa-2xl":"fa-solid fa-play fa-2xl"} style={{"color": "#ffffff"}} id="start_stop" onClick={this.start_stop_timer}></i>
            <i className="fa-solid fa-rotate-right fa-2xl" style={{"color": "#ffffff"}} id="reset" onClick={this.reset}></i>
          </div>
        </div>
        <audio controls id="beep" style={{"display":"none"}}>
          <source src="/weep.wav" type="audio/wav"/>
        </audio> 
      </div>
    )
  }
}


export default App;
