import "../style/BmiList.css"


function BmiList({ range, bmi }) {

    return (
      <div className="card-3">
        <table>
        <tr className="table-row">
          <th>Type</th>
          <th>BMI</th>
          <th>WEIGHT</th>
        </tr>
        <tr className="table-row">
          <td className="table-field">Underweight</td>
          <td className="table-field">&lt;18.5</td>
          <td className="table-field">&lt;{range.underWeight.low}</td>
        </tr>
        <tr className="table-row">
          <td className="table-field">Normal</td>
          <td className="table-field">18.5-24.9</td>
          <td className="table-field">{range.normal.low} kg - {range.normal.high} kg</td>
        </tr>
        <tr className="table-row">
          <td className="table-field">overWeight</td>
          <td className="table-field">25-29.9</td>
          <td className="table-field">{range.overWeight.low} kg - {range.overWeight.high} kg</td>
        </tr>
        <tr className="table-row">
          <td className="table-field">Obesity Class I</td>
          <td className="table-field">30-34.9</td>
          <td className="table-field">{range.obesityOne.low} kg - {range.obesityOne.high} kg</td>
        </tr>
        <tr className="table-row">
          <td className="table-field">Obesity Class II</td>
          <td className="table-field">35-39.9</td>
          <td className="table-field">{range.obesityTwo.low} kg - {range.obesityTwo.high} kg</td>
        </tr>
        <tr className="table-row">
          <td className="table-field">Obesity Class III</td>
          <td className="table-field">&gt; 40</td>
          <td className="table-field">{range.obesityThree.low} kg - {range.obesityThree.high} kg</td>
        </tr>
      </table>
      </div>
    );
  }
  
  export default BmiList;