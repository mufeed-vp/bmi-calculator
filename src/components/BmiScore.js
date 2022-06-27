import "../style/BmiScore.css"

function BmiScore({ bmiNo, bmiName,changeWeight }) {

    return (
      <div className="card-2">
        <div className="title">Your BMI Score</div>
        <div className="score">
          <div className="bmi-no">{bmiNo}</div>
        </div>
        <div className="bmi-name">{bmiName}</div>
        {changeWeight.type === "positive" && (
          <div className="instrection">"You need lose <span className="instrection-bold">{changeWeight.wight} kg"</span> </div>
        )}
        {changeWeight.type === "negative" && (
          <div className="instrection">"You need gain <span className="instrection-bold">{changeWeight.wight} kg"</span> </div>
        )}
         {changeWeight.type === "normal" && (
          <div className="instrection">"You weight is Normal,Good for you" </div>
        )}
      </div>
    );
  }
  
  export default BmiScore;