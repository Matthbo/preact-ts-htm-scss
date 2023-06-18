import { html } from 'htm/preact';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = function (){
	return html`<div id="app">
		<${Header} />
		<main>
			<${Router}>
				<${Route} path="/" component=${Home} />
				<${Route} path="/profile/" component=${Profile} user="me" />
				<${Route} path="/profile/:user" component=${Profile} />
			<//>
		</main>
	</div>`;
}

export default App;
