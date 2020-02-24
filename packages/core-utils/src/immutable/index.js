import {Map, Range, List} from 'immutable';

export const isMap = (map) => Map.isMap(map);

export const isList = (map) => List.isList(map);

export const isMapContain = (map) => isMap(map) && map.size > 0;

export const isListContain = (list) => isList(list) && list.size > 0;

export const isInList = (list, value, key) => {
    if (isListContain(list)) {
        const comp = key ? list.findIndex((item) => item.get(key) === value) : list.findIndex((item) => item === value);
        return comp !== -1;
    }
    return false;
};

export const findInList = (list, value, key) => {
    if (isListContain(list)) {
        let result = List([]);
        list.forEach((item) => {
            if (item.get(key) === value) {
                result = result.push(item);
            }
        });
        return result ? result.first() : null;
    }
    return false;
};
