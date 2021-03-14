const { getMaxListeners } = require('process');
const Employee = require('../lib-classes/employee.js');

describe('employee', () => {
        it('Can instantiate Employee instance', () => {
            const employee = new Employee();
            expect(typeof (employee)).toBe('object');
        });
        it('should be able to take a new employee name', () => {
            const name = 'Nikima';
            const employee = new Employee(name);
            expect(employee.name).toBe(name);
        });
        it('can set id via constructor argument ', () => {
            const id = '23';
            const employee = new Employee('foo', id);
            expect(employee.id).toBe(id);
        });
        it('can get email via constructor argument', () => {
            const email = 'test@gmail.com';
            const employee = new Employee('foo', 23, email);
            expect(employee.email).toBe(email);
        });

        it('can get name via getName()', () => {
            const testValue = 'Nikima';
            const employee = new Employee(testValue);
            expect(employee.getName()).toBe(testValue);
        });

        it('can get id via getId()', () => {
            const testValue = 23;
            const employee = new Employee('Nikima', testValue);
            expect(employee.getId()).toBe(testValue);
        });
        it('can get email via getEmail()', () => {
            const testValue = 'test@gmail.com';
            const employee = new Employee('Nikima', 100, testValue);
            expect(employee.getEmail()).toBe(testValue);
        });
        it('can get role via getRole()', () => {
            const testValue = 'Employee';
            const employee = new Employee('Nikima', 100, 'test@gmail.com');
            expect(employee.getRole()).toBe(testValue);
        });



})
