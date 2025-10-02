import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop';
import Card from './components/Card/Card';
import product1 from './assets/images/product1.jpg'
import product2 from './assets/images/product2.jpg'
import product3 from './assets/images/product3.jpg'
import Blog from './pages/Blog';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from './pages/About';


function App() {

  const cardsData = [
    { title: "Mountain bike", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, magnam.", image: product1 },
    { title: "Road bike", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, magnam.", image: product2 },
    { title: "Folding bike", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, magnam.", image: product3 },
  ];
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="cards-container">
                  {cardsData.map((card, index) => (
                    <Card
                      key={index}
                      id={index}                       
                      title={card.title}
                      description={card.description}
                      image={card.image}
                      count={0}                        
                      onIncrement={() => { }}          
                      onDecrement={() => { }}           
                      showCounter={false}              
                    />

                  ))}
                </div>
              }
            />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/about" element={<About/>} />


          </Routes>
          <Footer />
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
