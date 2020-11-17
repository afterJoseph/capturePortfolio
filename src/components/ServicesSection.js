import home2 from '../img/home2.png';
// Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

const ServicesSection = () => {
  const cardContent = [
    { icon: clock, name: 'Efficient' },
    { icon: diaphragm, name: 'Focus' },
    { icon: money, name: 'Affordable' },
    { icon: teamwork, name: 'Friendly' },
  ];
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services.
        </h2>
        <div className="cards">
          {cardContent.map((card) => {
            return (
              <div className="card">
                <div className="icon">
                  <img src={card.icon} alt={card.name} />
                  <h3>{card.name}</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="camera" />
      </div>
    </div>
  );
};

export default ServicesSection;
