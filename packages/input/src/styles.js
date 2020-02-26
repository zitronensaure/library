import styled, { css } from "styled-components";
import { ui } from "@zitronensaure/theme";

export const StyledContainer = styled.div`
    width: 100%;
`;

export const StyledLabel = styled.label`
    color: #868686;
    font-family: "Fira Sans";
    font-size: 0.8rem;
    text-transform: uppercase;
`;

export const StyledInput = styled.input`
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-shadow: none;
    box-sizing: border-box;
    caret-color: #000;
    color: #000;
    display: block;
    font-size: 14px;
    height: 40px;
    line-height: 26px;
    margin: ${ui.spacing.extraSmall} 0 ${ui.spacing.small};
    margin: 0;
    width: 100%;

    ::placeholder {
        color: #999;
    }

    ${props =>
        props.disabled &&
        css`
            color: #999999;
            background-color: #fafafa;
            cursor: not-allowed;
        `}
`;
