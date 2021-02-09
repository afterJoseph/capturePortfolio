import home2 from "../img/home2.png";
// Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
// Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollRevel } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const cardContent = [
    { icon: clock, name: "Efficient" },
    { icon: diaphragm, name: "Focus" },
    { icon: money, name: "Affordable" },
    { icon: teamwork, name: "Friendly" },
  ];
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollRevel}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services.
        </h2>
        <Cards>
          {cardContent.map((card) => (
            <Card>
              <div className="icon">
                <img src={card.icon} alt={card.name} />
                <h3>{card.name}</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          ))}
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      font-size: 1.5rem;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
