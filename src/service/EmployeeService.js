import axios from "axios";
 
class EmployeeService{
    baseUrl = "http://localhost:8080/employeepayrollservice";
    addEmployeePayRollData(data){
        return axios.post(`${this.baseUrl}/create`,data);
    }
}
export default new EmployeeService();