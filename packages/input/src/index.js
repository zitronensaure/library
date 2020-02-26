import React from "react";
import PropTypes from "prop-types";

import { StyledContainer, StyledLabel, StyledInput } from "./styles";

const Input = ({ disabled, id, label, placeholder }) => (
    <StyledContainer>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledInput
            disabled={disabled}
            id={id}
            placeholder={placeholder}
            type="text"
        />
    </StyledContainer>
);

Input.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

Input.defaultProps = {
    disabled: false
};

export default Input;
