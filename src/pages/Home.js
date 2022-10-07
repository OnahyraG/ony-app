import Carousel from "better-react-carousel";
import './styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Bienvenido!</h1>
            <div className="carousel">
            <Carousel cols={1} rows={1} gap={10} loop>
            <Carousel.Item>
                <img width="70%" src="./assets/img/carousel-one.png" alt="img-one"/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="70%" src="./assets/img/carousel-two.png" alt="img-two"/>
            </Carousel.Item>
            <Carousel.Item>
                <img width="70%" src="./assets/img/carousel-three.png" alt="img-three"/>
            </Carousel.Item>
            </Carousel>
            </div>
        </div>
        
    )
}

export default Home
