import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store';

const store = configureStore();

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component store={store} />
		</AppContainer>,
		document.getElementById('app'),
	);
};

render(Root);

if (module.hot) {
	module.hot.accept('./components/Root', () => { render(Root); });
}
