function QuizOption({ value, CheckAnswer,color }) {
  const onClickHandle = () => {
    CheckAnswer(value);
    setBgColor((bgcolor) => (bgcolor === "light" ))

  };
  return (
    <div className="QuizOption-container">
      <h4 className={color} onClick={onClickHandle}>{value}</h4>
    </div>
  );
}
export default QuizOption;
