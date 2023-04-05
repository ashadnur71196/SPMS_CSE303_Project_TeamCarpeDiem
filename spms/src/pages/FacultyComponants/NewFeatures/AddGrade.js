import React from "react";
import Facultynav from "../../facultypages/facultynav";
import "../../../styles/facultycss/faculty.css";
import { Button } from "react-bootstrap";

const AddGrade = () => {
  return (
    <div>
      <Facultynav />
      <div className="main-content">
        <div className="grade">
          <div className="addgrade">
            <form className="gradediv">
              <label>
                Student ID
                <input type="text" name="name" />
              </label>
              <label>
                Educational year
                <select id="cars">
                  <option value="volvo">2023</option>
                  <option value="saab">2022</option>
                  <option value="opel">2021</option>
                  <option value="audi">2020</option>
                </select>
              </label>

              <label>
                Educational semester
                <select id="cars">
                  <option value="volvo">Spring</option>
                  <option value="saab">Autumn</option>
                  <option value="opel">Summer</option>
                </select>
              </label>
            </form>
          </div>

        <div className="addgrade">
          <div className="grade">
            <form className="gradediv">
              <label>
                Enrolled course
                <select id="cars">
                  <option value="volvo">CSC101</option>
                  <option value="saab">CSC303</option>
                  <option value="opel">CSC201</option>
                  <option value="audi">CSC303L</option>
                </select>
              </label>

              <label className="pp">
                Enrolled section
                <select id="cars">
                  <option value="volvo">Section-1</option>
                  <option value="saab">Section-2</option>
                  <option value="opel">Section-3</option>
                  <option value="audi">Section-4</option>
                </select>
              </label>

              <label className="pp" >
                Obtained grade
                <select id="cars">
                  <option value="volvo">A</option>
                  <option value="saab">A-</option>
                  <option value="opel">B+</option>
                  <option value="audi">B</option>
                  <option value="audi">B-</option>
                  <option value="audi">C+</option>
                  <option value="audi">C</option>
                </select>
              </label>


              <div className="mybtn">
              <Button>Submit</Button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddGrade;
