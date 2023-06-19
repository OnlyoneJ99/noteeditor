import {Component} from "react";
import "./form.css";
export default class ClassForm extends Component{
    constructor(){
        super();
        this.state = {name:"",email:"",password:""};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }
    handleInputChange(e){
        const {dataset,value} = e.target;
        this.setState({[dataset.name]:value});
    }
    handleSubmit(e){
        e.preventDefault();
        console.log("name:",this.state.name);
        console.log("email:",this.state.email);
        console.log("password:",this.state.password);
    }
    render(){
        return (
            <div className="wrapper">
                <form onSubmit={this.handleSubmit} className="form">
                    <label htmlFor="name">Name</label>
                    <input onChange={this.handleInputChange} data-name="name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleInputChange} data-name="email"type="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleInputChange} data-name = "password" type="password" id="password" />
                    <button onClick={this.handleSubmit} className="submitbtn">submit</button>
                </form>
            </div>
        )
    }
}