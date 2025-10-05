import React from "react";
import Card from "../components/Card/Card";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import { Container } from "../assets/css/Home.styled";

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const cards: CardData[] = [
    {
      id: 1,
      title: "Mountain bike",
      description: "Great for mountains",
      image: product1,
    },
    {
      id: 2,
      title: "Road bike",
      description: "Fast and light",
      image: product2,
    },
    {
      id: 3,
      title: "Folding bike",
      description: "Perfect for city",
      image: product3,
    },
  ];

  return (
    <Container>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          count={0} 
          onIncrement={() => {}}
          onDecrement={() => {}}
          showCounter={false} 
        />
      ))}
    </Container>
  );
};

export default Home;
