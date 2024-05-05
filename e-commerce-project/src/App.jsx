import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { Button } from 'react-bootstrap';

function App() {
  const productsArr = [
    {
      title: 'Colors',

      price: 100,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },

    {
      title: 'Black and white Colors',

      price: 50,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },

    {
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
      title: 'Blue Color',

      price: 100,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
    {
      title: 'Colors',

      price: 100,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
  ];

  return (
    <>
      <header>
        <NavBar />
        <h1 className="text-center bg-secondary p-5">The Generics</h1>
      </header>
      <section>
        {productsArr.map((product, index) => (
          <Cards
            key={index}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
        <div className="container d-flex justify-content-center">
          <Button variant="info">See the cart</Button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
