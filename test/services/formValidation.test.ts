import {validateEmail, validateName, validatePhone} from "../../src/services/formValidation";

describe('name validation', () => {
    describe('name should be valid', () => {
        test('name consist of a string with 2 words', () => {
            const name = 'Alice Green'
            const result = validateName(name)
            expect(result).toBeTruthy()
        })
    })
    describe('name should be invalid', () => {
        test('name consist of a string with 1 word', () => {
            const name = 'Alice'
            const result = validateName(name)
            expect(result).toBeFalsy()
        })
        test('name consist of a string with numbers', () => {
            const name = 'Alice 222'
            const result = validateName(name)
            expect(result).toBeFalsy()
        })
        test('name consist of a empty string', () => {
            const name = ''
            const result = validateName(name)
            expect(result).toBeFalsy()
        })
        test('name consist of a more then 2 words', () => {
            const name = 'Alice Green White'
            const result = validateName(name)
            expect(result).toBeFalsy()
        })
    })
})

describe('phone validation', () => {
    describe('phone should be valid', () => {
        test('phone consist of a string with 10 numbers', () => {
            const phone = '0123456789'
            const result = validatePhone(phone)
            expect(result).toBeTruthy()
        })
    })
    describe('phone should be invalid', () => {
        test('phone consist of a string with a letter', () => {
            const phone = '123456789e'
            const result = validatePhone(phone)
            expect(result).toBeFalsy()
        })
        test('phone consist of a empty string', () => {
            const phone = ''
            const result = validatePhone(phone)
            expect(result).toBeFalsy()
        })
        test('phone consist of a more than 10 numbers', () => {
            const phone = '12345678912'
            const result = validatePhone(phone)
            expect(result).toBeFalsy()
        })
        test('phone consist of a less than 10 numbers', () => {
            const phone = '123456789'
            const result = validatePhone(phone)
            expect(result).toBeFalsy()
        })
    })
})

describe('email validation', () => {
    describe('email should be valid', () => {
        test('email consist of a string with @ and dot', () => {
            const email = 'my@email.com'
            const result = validateEmail(email)
            expect(result).toBeTruthy()
        })
    })
    describe('email should be invalid', () => {
        test('email doesnt consist @', () => {
            const email = 'myemail.com'
            const result = validateEmail(email)
            expect(result).toBeFalsy()
        })
        test('email doesnt consist .', () => {
            const email = 'my@emailcom'
            const result = validateEmail(email)
            expect(result).toBeFalsy()
        })
        test('email consist of empty string', () => {
            const email = ''
            const result = validateEmail(email)
            expect(result).toBeFalsy()
        })
    })
})