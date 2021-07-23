import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './scss/App.scss';
import { Header } from './components/Header';

const App = () => {
	return (
		<Router>
				<React.Fragment>
					<Header />
					<Route component={Routes} />
				</React.Fragment>
		</Router>
	)
}

export default App;
