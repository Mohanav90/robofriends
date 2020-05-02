import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{

	constructor(){
		super()
		this.state = {
			robots:[],
			searchfield: ""
		}
	
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots : users}));
		
	}
	onsearchchange =(e) =>{
		this.setState({searchfield: e.target.value});
	}
render(){
	const filterrecords = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})
	
	return (

		<div className="tc">
		 <h1 >RoboFriends</h1>
		 <SearchBox searchChange={this.onsearchchange}/>
		 <Scroll>
         <CardList robots ={filterrecords} />
         </Scroll>

         </div>
		);
}
}


export default App;