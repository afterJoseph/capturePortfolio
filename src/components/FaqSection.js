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
    <div className="faq">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      {questions.map((question) => (
        <div className="question">
          <h4>{question.title}</h4>
          <p>{question.subTitle}</p>
          <p>{question.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
