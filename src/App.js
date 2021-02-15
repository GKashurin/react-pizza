// npm start + npm run dev
// - ReactJS
// - Redux (библиотека для хранения данных на клиентской части)
// - redux-thunk (доп. библиотека для Redux. Асинхроные действия).
// - React Router (библиотека для реализации переходов без перезагрузки страницы).
// - Axios (библиотека для отправки AJAX-запросов)
// - json-server (для хранения пицц на фейковом сервере)
import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Route path="/" component={Home} exact />
				<Route path="/cart" component={Cart} exact />
			</div>
		</div>
	);
}

export default App;