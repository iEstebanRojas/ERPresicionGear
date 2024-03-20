import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          
            <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '10px' }} />

            <img
                src="https://www.dastecsrl.com.ar/uploads/productos/migracion/594%20-%20ST75%20-%2075A%20-%2075AV%20%7C%20Caudal%C3%ADmetro%20m%C3%A1sico%20por%20dispersi%C3%B3n%20t%C3%A9rmica/2015/03/ST75-right-lo.jpg"
                alt="Caudalímetro"
                style={{ width: '30px', height: 'auto', marginRight: '10px' }}
            />

            <span style={{ color: 'red' }}>5</span>
        </div>
    );
};
