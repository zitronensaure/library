import { createGlobalStyle } from "styled-components";

import { ui } from "./ui";

const {
    fonts: { ibmPlexSans, iaWriter },
    fontWeight: { regular, medium, semiBold, bold }
} = ui;

export const GlobalStyle = createGlobalStyle`
  body {
    h1 {
      font-family: ${ibmPlexSans};
      font-size: 24px;
      font-weight: ${semiBold};
      letter-spacing: 0;
      margin: 0px;
    },
    h2 {
      font-family: ${ibmPlexSans};
      font-size: 16px;
      font-weight: ${medium};
      letter-spacing: 0;
      line-height: 22px;
      margin: 0px;
    },
    h3 {
      font-family: ${ibmPlexSans};
      font-size: 16px;
      font-weight: ${regular};
      letter-spacing: 0;
      line-height: 22px;
      margin: 0px;
    },
    h4 {
      font-family: ${ibmPlexSans};
      font-size: 14px;
      font-weight: ${bold};
      letter-spacing: 0;
      line-height: 18px;
      margin: 0px;
    },
    h5 {
      font-family: ${ibmPlexSans};
      font-size: 12px;
      font-weight: ${bold};
      letter-spacing: 0;
      line-height: 16px;
      margin: 0px;
    },
    h6 {
      font-family: ${iaWriter};
      font-size: 12px;
      font-weight: ${bold};
      letter-spacing: 0;
      line-height: 16px;
      margin: 0px;
    }
    *, *:before, *:after {
      box-sizing: content-box;
    }
  }
`;

export default GlobalStyle;
