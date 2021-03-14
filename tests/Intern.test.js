const Intern = require('../lib-classes/intern');

describe('intern', () => {
        it('Can instantiate Intern instance', () => {
            const intern = new Intern();
            expect(typeof (intern)).toBe('object');
        });
        it('should be able to take a new intern name', () => {
            const name = 'Nikima';
            const intern = new Intern(name);
            expect(intern.name).toBe(name);
        });
        it('can set id via constructor argument ', () => {
            const id = '23';
            const intern = new Intern('foo', id);
            expect(intern.id).toBe(id);
        });
        it('can get email via constructor argument', () => {
            const email = 'test@gmail.com';
            const intern = new Intern('foo', 23, email);
            expect(intern.email).toBe(email);
        });

        it('can get name via getName()', () => {
            const testValue = 'Nikima';
            const intern = new Intern(testValue);
            expect(intern.getName()).toBe(testValue);
        });

        it('can get id via getId()', () => {
            const testValue = 23;
            const intern = new Intern('Nikima', testValue);
            expect(intern.getId()).toBe(testValue);
        });
        it('can get email via getEmail()', () => {
            const testValue = 'test@gmail.com';
            const intern = new Intern('Nikima', 100, testValue);
            expect(intern.getEmail()).toBe(testValue.testValue);
        });

        it('can get shool via getShool()', () => {
            const testValue = 'SUNY Plattsburgh';
            const intern = new Intern('Nikima', 100, 'test@gmail.com', testValue);
            expect(intern.getSchool()).toBe(testValue);
        })

        it('can get role via getRole()', () => {
            const testValue =  'Intern';
            const intern = new Intern('Nikima', 100, 'test@gmail.com', 'SUNY Plattsburgh', testValue);
            expect(intern.getRole()).toBe(testValue);
        });



})