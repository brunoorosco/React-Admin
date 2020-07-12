// import * as React from "react";
// import jsonServerProvider from 'ra-data-json-server';
// import { Admin, Resource, ListGuesser } from 'react-admin';

// import PostIcon from '@material-ui/icons/Book';
// import UserIcon from '@material-ui/icons/People';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// const App = () => (
//   <Admin dataProvider={dataProvider} >
//     <Resource name="users" list={ListGuesser} />
//     <Resource name="comments" list={ListGuesser} />
//     <Resource name="albums" list={ListGuesser} show={"teste"} />
//     <Resource name="posts" options={{ label: 'Postagens' }} list={ListGuesser}  />
//   </Admin >
// );

// export default App;

import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
	response: ''
  };

  componentDidMount() {
	this.callApi()
  	.then(res => this.setState({ response: res.express }))
  	.catch(err => console.log(err));
  }

  callApi = async () => {
	const response = await fetch('/api/mensagem');
	const body = await response.json();
	if (response.status !== 200) throw Error(body.message);

	return body;
  };

  render() {
	return (
  	<div className="App">
    	<header className="App-header">
      	<h1 className="App-title">Welcome to React</h1>
    	</header>
    	<p className="App-intro">{this.state.response}</p>
  	</div>
	);
  }
}

export default App;
