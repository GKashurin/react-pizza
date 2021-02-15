//Деструктуризация в JS:
// Есть объект:
//  const obj = {name: "Вася", lastName: 'Петров', age: 30}
// С помощью деструктуризации можно взять каждое свойство массива и
// передать его в свою собственную переменную
// const {name} = obj; - получим Вася
// const {lastName} = obj; Получим Петров
// С массивами аналогично. Деструктуризация в массивах используется в хуках
// Применение ниже
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ onClick, className, outline, children }) => {
	return (
		<button
			onClick={onClick}
			className={classNames('button', className, {
				'button--outline': outline,
			})}>
			{children}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
};

export default Button;