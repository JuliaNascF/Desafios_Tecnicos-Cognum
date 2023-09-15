const EmployeeRepository = require('../repositories/employee.repository');

class EmployeeService {
    constructor() {
        this.employeeRepository = new EmployeeRepository();
    }

    async createEmployee(name, role) {
        try {
            return await this.employeeRepository.createEmployee(name, role);
        } catch (error) {
            throw error;
        }
    }

    async getEmployeeById(id) {
        try {
            return await this.employeeRepository.getEmployeeById(id);
        } catch (error) {
            throw error;
        }
    }

    async getAllEmployees() {
        try {
            return await this.employeeRepository.getAllEmployees();
        } catch (error) {
            throw error;
        }
    }

    async updateEmployee(id, name, role) {
        try {
            return await this.employeeRepository.updateEmployee(id, name, role);
        } catch (error) {
            throw error;
        }
    }

    async deleteEmployee(id) {
        try {
            return await this.employeeRepository.deleteEmployee(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EmployeeService;
