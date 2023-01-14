
import "./Display.css";
import deleteIcon from "../FormComponents/assets/icons/delete-black-18dp.svg";
import editIcon from "../FormComponents/assets/icons/create-black-18dp.svg";
import profile1 from "../FormComponents/assets/profile-images/pic1.png";
import profile2 from "../FormComponents/assets/profile-images/pic2.png";
import profile3 from "../FormComponents/assets/profile-images/pic3.png";
import profile4 from "../FormComponents/assets/profile-images/pic4.png";
import EmployeeService from "../../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const Display = (props) => {
  let navigate = useNavigate();
  
  const update = (employeeId) => {
    navigate(`Employeeform/${employeeId}`);
  };

  const remove = (employeeId) => {
    console.log(employeeId);
    var answer = window.confirm(
      "Data once deleted cannot be restored!! Do you wish to continue ?"
    );
    if (answer === true) {
      EmployeeService.deleteEmployeePayrollData(employeeId)
        .then((Data) => {
          alert("Employee deleted successfully!!");
          window.location.reload();
          props.getEmployeePayrollData();
        })
        .catch((error) => {
          console.log("Something Went Wrong!");
        });
    } else {
      alert("Employee Not Deleted");
    }
  };

  return (
    <>
      <table id="display" className="display">
        <thead>
          <tr>
            <th>Profile Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Departments</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.employeeArray &&
            props.employeeArray.map((employees, index) => (
              <tr key={`${index}`}>
                <td>
                  <img
                    className="profile"
                    src={
                      employees.profilePic ===
                      ".../FormComponents/assets/profile-images/Ellipse-4"
                        ? profile1
                        : employees.profilePic ===
                          "../FormComponents/assets/profile-images/pic-3.png"
                        ? profile2
                        : employees.profilePic ===
                          "../../Assets/profile-images/Ellipse -7.png"
                        ? profile3
                        : profile4
                    }
                    alt=""
                  />
                </td>

                <td>{employees.name}</td>
                <td className="gender">{employees.gender}</td>
                <td>
                  {employees.departments &&
                    employees.departments.map((dept) => (
                      <div className="dept-label">{dept}</div>
                    ))}
                </td>
                <td> ₹{employees.salary}</td>
                <td>{employees.startDate}</td>
                <td>{employees.note}</td>
                <td>
                 <img
                    onClick={() => remove(employees.employeeId)}
                    src={deleteIcon}
                    alt="delete"
                  />
                  <img
                    onClick={() => update(employees.employeeId)}
                    src={editIcon}
                    alt="edit"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
export default Display;
