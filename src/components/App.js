import React , { Component } from 'react';
import CardList from '../containers/CardList';
import Scroll from '../containers/Scroll';
import { robots } from '../containers/robots';
import SearchBox from '../containers/SearchBox';  
import './App.css'


class App extends Component {
	constructor(){
		super()
		this.state  = {
			robots: robots,
			searchfield:''
		}
	}


onSearchChange =  (event) => {
	this.setState({searchfield:event.target.value})
}


render(){

	const {robots ,searchfield} = this.state
	const filterRobots =robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});
		return(
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox SearchChange ={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filterRobots}/>
				
					<div><p>Designed by Lokesh</p></div>
				</Scroll>

			
			</div>


			);
	}

}

export default App;