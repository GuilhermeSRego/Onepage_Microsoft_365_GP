import React, { useState } from "react";
import "./styles.css";
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "react-icons/ti";

const cardsData = [
    {
        title: 'Card',
        content: 'texto do card'
    },
    {
        title: 'Card',
        content: 'texto do card'
    },
    {
        title: 'Card',
        content: 'texto do card'
    },
    {
        title: 'Card',
        content: 'texto do card'
    },
    {
        title: 'Card',
        content: 'texto do card'
    },
    {
        title: 'Card',
        content: 'texto do card'
    },
    {
        title: 'Card',
        content: 'texto do card'
    },
    {
        title: 'Card',
        content: 'texto do card'
    },
]

const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          key={i}
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const TimeLine = () => {
  return <div className="timeline-wrapper">
        <Carousel>
            {cardsData.map((card, i) => (
                <Card 
                    title={`${card.title} ${i + 1}`} 
                    key={i} 
                    content={ card.content }/>
            ))}
        </Carousel>
  </div>;
};

export default TimeLine;
