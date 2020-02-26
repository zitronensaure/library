import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "../packages/theme/src";

addDecorator(story => (
    <>
        <GlobalStyle />
        {story()}
    </>
));
