// Styles
import styled from 'styled-components';
import { About } from '../styles';

const FaqSection = () => {
  const questions = [
    {
      title: 'How Do I Start?',
      subTitle: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fugiat assumenda.',
    },
    {
      title: 'Daily Schedule',
      subTitle: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fugiat assumenda.',
    },
    {
      title: 'Different Payment Methods',
      subTitle: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fugiat assumenda.',
    },
    {
      title: 'What Products Do You Offer?',
      subTitle: 'Lorem ipsum dolor sit amet.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fugiat assumenda.',
    },
  ];

  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {questions.map((question) => (
        <div className="question">
          <h4>{question.title}</h4>
          <div className="answer">
            <p>{question.subTitle}</p>
            <p>{question.description}</p>
          </div>
          <div className="faq-line"></div>
        </div>
      ))}
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
