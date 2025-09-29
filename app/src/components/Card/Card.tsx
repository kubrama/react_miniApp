
import React from "react";
import { CardWrapper, CardImage, CardTitle, CardDescription } from "./Card.styled";
import Counter from "../Counter/Counter";

interface CardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    count: number;
    onIncrement: (id: number) => void;
    onDecrement: (id: number) => void;
    showCounter?: boolean;
}

const Card: React.FC<CardProps> = ({
    id,
    title,
    description,
    image,
    count,
    onIncrement,
    onDecrement,
    showCounter = true,
}) => {
    return (
        <CardWrapper>
            <CardImage src={image} alt={title} />
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>


            {showCounter && (
                <Counter
                    id={id}
                    count={count}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                />
            )}
        </CardWrapper>
    );
};

export default Card;
