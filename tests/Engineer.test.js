
const Engineer = require('../lib-classes/engineer.js');

describe('Engineer', () => {
        it('Can instantiate Engineer instance', () => {
            const engineer = new Engineer();
            expect(typeof (engineer)).toBe('object');
        });
        it('should be able to take a new Engineer name', () => {
            const name = 'Nikima';
            const engineer = new Engineer(name);
            expect(engineer.name).toBe(name);
        });
        it('can set id via constructor argument ', () => {
            const id = '23';
            const engineer = new Engineer('foo', id);
            expect(engineer.id).toBe(id);
        });
        it('can get email via constructor argument', () => {
            const email = 'test@gmail.com';
            const engineer = new Engineer('foo', 23, email);
            expect(engineer.email).toBe(email);
        });

        it('can get name via getName()', () => {
            const testValue = 'Nikima';
            const engineer = new Engineer(testValue);
            expect(engineer.getName()).toBe(testValue);
        });

        it('can get id via getId()', () => {
            const testValue = 23;
            const engineer = new Engineer('Nikima', testValue);
            expect(engineer.getId()).toBe(testValue);
        });
        it('can get email via getEmail()', () => {
            const testValue = 'test@gmail.com';
            const engineer = new Engineer('Nikima', 100, testValue);
            expect(engineer.getEmail()).toBe(testValue);
        });

        it('can get github via getGithub()', () => {
            const testValue = 'GithubUserName';
            const engineer = new Engineer('Nikima', 100, 'test@gmail.com', testValue);
            expect(engineer.getGithub()).toBe(testValue);
        });


        it('can get role via getRole()', () => {
            const testValue = 'Engineer';
            const engineer = new Engineer('Nikima', 100, 'test@gmail.com', 'GithubUserName', testValue);
            expect(engineer.getRole()).toBe(testValue);
        });



})