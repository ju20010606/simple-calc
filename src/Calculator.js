import React, {Component} from 'react'


class Calculator extends Component {


    state = {
        value1: 0,
        value2: 0,
        finalValueAdd: 0,
        finalValueMultiply: 0,
        finalValueSubstract: 0,
        finalValueDevide: 0

    }
    
   changeValueNum1 = (e) =>{
      this.setState({
          value1: this.state.value1 = e.target.value
          
      })
      console.log('value1:',this.state.value1)
   }
   
   changeValueNum2 = (e) =>{
    this.setState({
        value2: this.state.value2 = e.target.value
    })
    console.log('value2:',this.state.value2)
   }

    add = () => {
        this.setState({
           
            finalValueAdd: parseInt(this.state.value1) + parseInt(this.state.value2)
        })
    }
    
    multiply = () => {
        this.setState({
           
            finalValueMultiply: parseInt(this.state.value1) * parseInt(this.state.value2)
        })
    }
    
     substract = () => {
        this.setState({
           
            finalValueSubstract: parseInt(this.state.value1) - parseInt(this.state.value2)
        })
    }

    devide = () => {
        this.setState({
           
            finalValueDevide: parseInt(this.state.value1) / parseInt(this.state.value2)
        })
    }

  render(){
    return (
        <div className="container">
        <h1>Add with React!</h1>
      
        <div className="add">
          <input type="number" onChange={(e)=> this.changeValueNum1(e)} />
          <span>+</span>
          <input type="number" onChange={(e)=> this.changeValueNum2(e)} />
          <button onClick={this.add}>=</button>
          <h3>{this.state.finalValueAdd}</h3>
          
          <br/>
          <br/>
          <input type="number" onChange={(e)=> this.changeValueNum1(e)} />
          <span>x</span>
          <input type="number" onChange={(e)=> this.changeValueNum2(e)} />
          <button onClick={this.multiply}>=</button>
          <h3>{this.state.finalValueMultiply}</h3>
          
          <br/>
          <br/>
          <input type="number" onChange={(e)=> this.changeValueNum1(e)} />
          <span>-</span>
          <input type="number" onChange={(e)=> this.changeValueNum2(e)} />
          <button onClick={this.substract}>=</button>
          <h3>{this.state.finalValueSubstract}</h3>
          
          <br/>
          <br/>
          <input type="number" onChange={(e)=> this.changeValueNum1(e)} />
          <span>/</span>
          <input type="number" onChange={(e)=> this.changeValueNum2(e)} />
          <button onClick={this.devide}>=</button>
          <h3>{this.state.finalValueDevide}</h3>
          


          
        </div>
      </div>
    )
  }
}

export default Calculator;