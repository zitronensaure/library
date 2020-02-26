import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./styles";

const APPEARANCES = {
    PRIMARY: "primary",
    SECONDARY: "secondary"
};

const Button = props => <StyledButton {...props} />;

Button.propTypes = {
    disabled: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(APPEARANCES))
};

Button.defaultProps = {
    disabled: false,
    variant: APPEARANCES.PRIMARY
};

export default Button;
