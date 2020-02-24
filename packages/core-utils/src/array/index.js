import {Map, Range, List} from 'immutable';

export const isArray = (array) => Array.isArray(array);

export const isArrayContain = (array) => isArray(array) && array.length > 0;

export const isInArray = (array, value, key) => {
    if (isArrayContain(array)) {
        const comp = key ? array.findIndex((item) => item[key] === value) : array.findIndex((item) => item === value);
        return comp !== -1;
    }
    return false;
};

export const findInArray = (array, value, key) => {
    if (isArrayContain(array)) {
        const result = [];
        array.forEach((item) => {
            if (item[key] === value) {
                result.push(item);
            }
        });
        return result ? result[0] : null;
    }
    return false;
};
