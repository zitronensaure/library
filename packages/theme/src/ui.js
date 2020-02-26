const general = {
    columns: 10,
    base: 8,
    maxWidth: 1248
};

const sizes = {
    desktop: 6000,
    tablet: 929,
    phone: 600
};

const fonts = {
    ibmPlexSans: '"IBM Plex Sans", sans-serif',
    iaWriter: '"IA Writer", sans-serif',
    openSans: '"Open Sans", sans-serif'
};

const colours = {
    primaryColours: {
        XOPink: "#FF004F",
        XOHover: "#CF0040",
        XOPress: "#9F0031",
        blueBlack: "#041021",
        blueBlack75: "#434C59",
        blueBlack50: "#818790",
        blueBlack25: "#C0C3C7"
    },
    primaryBackgroundColours: {
        retroDark: "#2D2840",
        white: "#FFFFFF",
        grey2: "#E4E5EA",
        grey3: "#E9EDF2",
        grey4: "#F3F5F9",
        grey5: "#F7F8FA"
    },
    secondaryColours: {
        pink: "#FF9EB3",
        pink50: "#FFCFD9",
        pinkDRK: "#50011A",
        orange: "#FFC782",
        orange50: "#FFE3C1",
        orangeDRK: "#5C270E",
        green: "#A3F0C8",
        green50: "#D1F8E4",
        greenDRK: "#0D4B52",
        blue: "#A5C3EF",
        blue50: "#D2E1F7",
        lilac: "#8E6C8B",
        lilac50: "#C7B6C5",
        lilacDRK: "#460A40"
    },
    errorsAndWarnings: {
        error: "#FF0000",
        errorHighlight: "#FFE3E3",
        warningHighlight: "#FFFFCA"
    }
};

const fontSize = {
    xxxl: "6rem",
    xxl: "4.6rem",
    xl: "2.8rem",
    lg: "1.8rem",
    md: "1.3rem",
    nm: "1rem",
    sm: "0.75rem"
};

const fontWeight = {
    light: 200,
    regular: 300,
    medium: 400,
    semiBold: 500,
    bold: 600
};

const iconSize = {
    xxxl: 64,
    xxl: 56,
    xl: 48,
    l: 40,
    m: 32,
    s: 24,
    xs: 16,
    xxs: 10,
    xxxs: 8
};

const spacing = {
    extraLarge: "32px",
    large: "24px",
    medium: "16px",
    small: "6px",
    extraSmall: "4px"
};

export const ui = {
    sizes,
    fonts,
    colours,
    fontSize,
    fontWeight,
    iconSize,
    spacing,
    ...general
};

export default ui;
