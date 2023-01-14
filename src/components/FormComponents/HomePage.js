import React, { Component } from 'react';
import "./HomePage.css"
import logo from "./assets/profile-images/logo.png";
import EmployeeService from '../../service/EmployeeService';
import { Link } from 'react-router-dom';
import Display from './Display';
import addImage from '../FormComponents/assets/icons/add-24px.svg'
import "./Display.css"

class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        AllEmployeeArray: [],
      };
    }
    componentDidMount() {
      console.log("Life cycle method");
      this.getAllEmployee();
    }
  
    getAllEmployee = () => {
      EmployeeService.getEmployeePayrollData()
        .then((response) => {
          this.setState({
            AllEmployeeArray: response.data.data,
          });
          console.log(response);
        })
        .catch((err) => {
          alert("Something went wrong, while getting all the records", err);
        });
    };
  
    render() {
      console.log("====================================");
      console.log("Render method");
      console.log("====================================");
      return (
        <div>
          <body>
            <header className="header-content header">
              <div className="logo-content">
                <Link to="/home">
                  <img src={logo} alt="" />
                </Link>
                <div>
                  <span className="emp-text">EMPLOYEE</span>
                  <br />
                  <span className="emp-text emp-payroll">PAYROLL</span>
                </div>
              </div>
            </header>
            <div className="main-content">
              <div className="header-content sub-main-content">
                <div className="emp-details-text">
                  Employee Details
                  <div className="emp-count"></div>
                </div>
  
                <Link className="add-btn" to="/home">
                  <img src={addImage} alt="Add user" />
  
                  <div>Add User</div>
                </Link>
              </div>
              <div className="table-main">
                <Display
                  employeeArray={this.state.AllEmployeeArray}
                  getAllEmployee={this.getAllEmployee}
                />
              </div>
            </div>
          </body>
        </div>
      );
    }
  }
  
  export default HomePage;
  