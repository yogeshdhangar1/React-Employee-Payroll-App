import axios from "axios";
 
class EmployeeService{
    baseUrl = "http://localhost:8080/employeepayrollservice";
    addEmployeePayRollData(data){
        
        return axios.post(`${this.baseUrl}/create`,data);
    }
    getEmployeePayrollData(data){
        return axios.get(`${this.baseUrl}/get`);
    }
  deleteEmployeePayrollData(empId){
    return axios.delete(`${this.baseUrl}/delete/${empId}`)
  }
  updateEmployeePayRollData(empId){
    return axios.put(`${this.baseUrl}/update/ ${empId}`)
  }
}
export default new EmployeeService();