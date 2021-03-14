
const Manager = require('../lib-classes/manager');

describe('manager', () => {
        it('Can instantiate Manager instance', () => {
            const manager = new Manager();
            expect(typeof (manager)).toBe('object');
        });
        it('should be able to take a new manager name', () => {
            const name = 'Nikima';
            const manager = new Manager(name);
            expect(manager.name).toBe(name);
        });
        it('can set id via constructor argument ', () => {
            const id = '23';
            const manager = new Manager('foo', id);
            expect(manager.id).toBe(id);
        });
        it('can get email via constructor argument', () => {
            const email = 'test@gmail.com';
            const manager = new Manager('foo', 23, email);
            expect(manager.email).toBe(email);
        });

        it('can get name via getName()', () => {
            const testValue = 'Nikima';
            const manager = new Manager(testValue);
            expect(manager.getName()).toBe(testValue);
        });

        it('can get id via getId()', () => {
            const testValue = 23;
            const manager = new Manager('Nikima', testValue);
            expect(manager.getId()).toBe(testValue);
        });
        it('can get email via getEmail()', () => {
            const testValue = 'test@gmail.com';
            const manager = new Manager('Nikima', 100, testValue);
            expect(manager.getEmail()).toBe(testValue.testValue);
        });

        it('can get office number via getOfficeNumber () ', () => {
            const testValue = '369';
            const manager = new Manager('Nikima', 100, 'test@gmail.com', testValue);
            expect(manager.getEmail()).toBe(testValue.testValue);
        });


        it('can get role via getRole()', () => {
            const testValue = 'Manager';
            const manager = new Manager('Nikima', 100, 'test@gmail.com', '369',testValue);
            expect(manager.getRole()).toBe(testValue);
        });



})