import {
    shape,
    number,
    string,
    oneOf,
    oneOfType,
    arrayOf,
    func,
    bool,
    element
} from "prop-types";

export const optionType = shape({
    id: oneOfType([number, string, oneOf([null, undefined])]),
    value: oneOfType([number, string, bool, oneOf([null, undefined])]),
    label: oneOfType([string, element, oneOf([null, undefined])])
});

export const inputType = shape({
    input: shape({
        name: string,
        value: oneOfType([number, string, optionType]),
        onChange: func
    })
});

export const inputCheckboxType = shape({
    input: shape({
        name: string,
        checkbox: bool,
        onChange: func
    })
});

export const optionsType = arrayOf(optionType);
