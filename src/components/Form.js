import { useState } from "react";
import "../style/Form.css";

function Form({ getData }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      console.log("Not a valid input");
      setAlert(true);
    } else {
      getData(weight, height);
      setAlert(false);
      setHeight("");
      setWeight("");
    }
  };
  return (
    <>
      <div className="card">
        <h2>BMI Calculator</h2>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <div className="first-form">
                  <label>Weight(kg)</label>
                  <input
                    type="text"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <div className="second-form">
                  <label>Hight(m)</label>
                  <input
                    type="text"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
      {/* <div className="form-main">
        <hi>hello</hi>
        <form>
          <div className="first-form">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
          </div>
            <div className="second-form">
              <label>
                Name:
                <input type="text" name="name" />
              </label>
            </div>
          <input type="submit" value="Submit" />
        </form>
      </div> */}
    </>
  );
}

export default Form;
