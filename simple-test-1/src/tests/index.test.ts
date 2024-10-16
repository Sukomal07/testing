import { describe, test, expect, it } from '@jest/globals'
import { sum } from '..'

describe('Testing sum function', () => {
    it('handel case 3', () => {
        const finalAnswer = sum(1, 2);

        expect(finalAnswer).toBe(3)
    })

    it('should return negetive number sum correctly', () => {
        const finalAnswer = sum(-1, -2);
        expect(finalAnswer).toBe(-3);
    })

    test('return 5', () => {
        expect(sum(2, 3)).toBe(5)
    })
})