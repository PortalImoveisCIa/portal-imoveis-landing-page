export interface ITheme {
  colors: {
    white: string;
    black: string;
    primary: string;
    red: string;
    warning: string;
    background: string;
    gray: string;
    dark_gray: string;
    gray_light: string;
  };
  borderRadius: string;
}

export const theme: ITheme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    primary: "#64FE01",
    red: "#f10000",
    warning: "#FFCC00",
    background: "#EFEFEF",
    gray: "#B1B1B1",
    dark_gray: "#333333",
    gray_light: "#D9D9D9D9",
  },
  borderRadius: "10px",
};
