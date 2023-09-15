const db = require('../database/database.connection');

class EmployeeRepository {
    async createEmployee(name, role) {
        return db.query('INSERT INTO Employee (name, role) VALUES ($1, $2) RETURNING *', [name, role]);
    }

    async getEmployeeById(id) {
        return db.query('SELECT * FROM Employee WHERE id = $1', [id]);
    }

    async getAllEmployees() {
        return db.query('SELECT * FROM Employee');
    }

    async updateEmployee(id, name, role) {
        return db.query('UPDATE Employee SET name = $2, role = $3 WHERE id = $1 RETURNING *', [id, name, role]);
    }

    async deleteEmployee(id) {
        return db.query('DELETE FROM Employee WHERE id = $1 RETURNING *', [id]);
    }
}

module.exports = EmployeeRepository;
