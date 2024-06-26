import { useContext } from 'react';
import { Link } from 'react-router-dom';
import cart from '../assets/cart.png';
import { CartContext } from '../contexts/CartContext';

const CartWidget = () => {
	const { items } = useContext(CartContext);

	const total = items.reduce(
		(acumulador, valorActual) => acumulador + valorActual.cantidad * valorActual.price,
		0,
	);

	return (
		<div className='headerCart'>
			<Link to='/cart'>
				<img src={cart} alt='Carrito' />
				<span className='headerCartNumber'>{items.length === 0 ? ' ' : `$${total}`}</span>
			</Link>
		</div>
	);
};

export default CartWidget;
