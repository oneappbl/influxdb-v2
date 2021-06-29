const config = require('../index');

describe('Config extrictParseBool()', () => {
    it('should return false if undefined, none, empty, invalid value is passed', () => {
        expect(config.extrictParseBool('hello')).toBeUndefined();
        expect(config.extrictParseBool(1)).toBeUndefined();
        expect(config.extrictParseBool('')).toBeUndefined();
        expect(config.extrictParseBool('abcd')).toBeUndefined();
    });

    it('should return true if y, Y, true, t, T, 1, yes is passed', () => {
        expect(config.extrictParseBool('')).toBeUndefined();
        expect(config.extrictParseBool('y')).toBeTruthy();
        expect(config.extrictParseBool('yes')).toBeTruthy();
        expect(config.extrictParseBool('Y')).toBeTruthy();
        expect(config.extrictParseBool('true')).toBeTruthy();
        expect(config.extrictParseBool('t')).toBeTruthy();
        expect(config.extrictParseBool('T')).toBeTruthy();
    });

    it('should return default value if no value is passed for parsing', () => {
        expect(config.extrictParseBool(undefined, false)).toBeFalsy();
        expect(config.extrictParseBool(undefined, true)).toBeTruthy();
    });
});