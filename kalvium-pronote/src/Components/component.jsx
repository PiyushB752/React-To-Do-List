import React, { Component } from 'react'
import './style.css'

export default class component extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value:[],
        newWork:''
      }
    }
    inputHandle = (event) =>{
        this.setState({newWork : event.target.value})
    }
    addButton = () =>{
        const {value , newWork} = this.state
        this.setState({
            value:[...value,{id:value.length + 1 , text: newWork}],
            newWork:''
        })
    }
    update = (id,newWork) =>{
        this.setState(event =>({
            value: event.value.map(val=>val.id===id ? {...val,text:newWork}:val)
        }))
    }
    deleteButton = (id) =>{
        this.setState(event=>({
            value : event.value.filter(val=>val.id !== id)
        }))
    }      
  render() {
    const {value ,newWork} = this.state
    return (
    <div>
      <div className='adderSection'>
        <input type="text" placeholder='Type Here' value={newWork} onChange={this.inputHandle}/>
        <button className='addButton' onClick={this.addButton}>Add Item</button>
      </div>
      <div className="list">
        {value.map(value=>(
            <div key={value.id}>
                <input type="text" value={value.text} onChange={(event)=> this.update(value.id,event.target.value)}/>
                <button onClick={()=>this.deleteButton(value.id)}>Delete Item</button>
            </div>
        ))}
      </div>
    </div>
    )
  }
}