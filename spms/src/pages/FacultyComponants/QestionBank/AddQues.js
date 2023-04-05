import React from "react";
import Facultynav from "../../facultypages/facultynav";
import "../../../styles/facultycss/faculty.css";

const AddQues = () => {
  return (
    <div>
      <Facultynav />
      <div className="main-content">
        <div className="addquestion">
          <div className="cld">
            <form className="formDiv">
              <label>Quiz-1</label>
              <label>
                <select id="cars">
                  <option value="volvo">CSC101</option>
                  <option value="saab">CSC303</option>
                  <option value="opel">CSC201</option>
                  <option value="audi">CSC303L</option>
                </select>
              </label>

              <label>
                <select id="cars">
                  <option value="volvo">Section-1</option>
                  <option value="saab">Section-2</option>
                  <option value="opel">Section-3</option>
                  <option value="audi">Section-4</option>
                </select>
              </label>
            </form>
          </div>

          <div className="addquestion">
            <form className="formDiv">
              <label>
                <select id="cars">
                  <option value="volvo">Spring</option>
                  <option value="saab">Summer</option>
                  <option value="opel">Autumn</option>
                </select>
              </label>

              <label>
                <select id="cars">
                  <option value="volvo">2023</option>
                  <option value="saab">2022</option>
                  <option value="opel">2021</option>
                  <option value="audi">2020</option>
                </select>
              </label>
              <label>Submit</label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQues;
