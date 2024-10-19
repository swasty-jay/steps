const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const step = 3;
  function handleprevious() {
    if (step > 1) step -= 1;
    updateUIValues();
  }
  function handlenext() {
    if (step < 3) step += 1;
    updateUIValues();
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        {" "}
        step {step}:{messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffff" }}
          onClick={() => handleprevious()}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#ffff" }}
          onClick={() => handlenext()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
