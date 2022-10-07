import { Link } from 'react-router-dom';
import './styles/Error.css';

const Error = () => {

        return(
            <div className="error">
                <div className="text">
                    <h1>Error 404 - Page not found</h1>
                    <h2>Click <Link to="/"><u>AQUI</u></Link> para volver al inicio</h2>
                </div>

            </div>


        )
}

export default Error