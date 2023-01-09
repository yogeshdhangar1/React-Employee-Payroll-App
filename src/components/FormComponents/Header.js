import logo from './assets/profile-images/logo.png';
import './FormComponenet.css';

function HeaderPage() {
    return (
        <div>
            <header class="header-content header">
                <div class="logo-content">
                    <img src={logo} width ={60} height={60}  alt='The EmployeePayroll App Logo'/>
                <div>
                    <span class="emp-text">EMPLOYEE</span>
                    <br/>
                    <span class="emp-text emp-payroll">PAYROLL</span>
                </div>
                </div>
            </header>
        </div>
    )
}
export default HeaderPage;