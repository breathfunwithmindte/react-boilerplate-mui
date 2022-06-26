import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext, useContext, useState, useEffect } from "react"
import useFetch from "./hooks/useFetch";
const mainContext = createContext();

const style = {
  bg0: "#FFFFFF",
  bg1: "#F5F7F9",
  bg2: "#e9e9e9",
  clr: "#212121",
  clr1: "#283034",
  clr2: "#565656",
  h: "rgba(0,0,0,0.14)",
  p: "1.14rem",
  p1: "0.69rem",
  p2: "0.24rem",
  m: "1.4rem",
  m1: "0.69rem",
  m2: "0.14rem",
  borderr: "1.4rem",
  borderr1: "0.69rem",
  borderr2: "2.5px",
  border: "0.14rem solid rgba(0,0,0,0.14)",
  border1: "0.14rem solid #45494E",
  pr: "#0A493A",
  pr1: "#09735A",
  pr2: "",
  prh: "#0a493a9c",
  pclr: "red",
  shadow_len: "0.24rem",
  ppadding: "23vw",
  wpg: "calc(100% - var(--whd))",
  whd: "224px"
};

export const ContextProvider = ({children}) => {

  const [result, loading, error, reload ] = useFetch("") 

  //const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [application, setApplication] = useState(new Object());
  const [navigations, setNavigations] = useState([]);
  const [theme, setTheme] = useState(style);

  const [mui_theme, set_mui_theme] = useState(createTheme())

  console.log(loading, result, error, reload)

  useEffect(() => {

    if(loading || error) return;
    setApplication(result.data.application);
    setUser(result.data.user);
    setNavigations(result.data.navigations);
    setTheme(result.data.theme);

    return () => {
    };
  }, [loading]);

  if(loading) return <p>loading...</p>
  return (
    <mainContext.Provider value={{ 
      application, setApplication, theme, setTheme, navigations, setNavigations, user, setUser, loading, reload
    }}>
      <ThemeProvider theme={mui_theme}>
        <div className="AppWrapper" style={createStyle(theme)}>{children}</div>
      </ThemeProvider>
    </mainContext.Provider>
  )
}

export default function useMain () {
  const smth = useContext(mainContext);
  return smth;
}

function createStyle(style) {
  let obj = {};

  for (const key in style) {
    if (Object.hasOwnProperty.call(style, key)) {
      obj[`--${key}`] = style[key];
    }
  }

  return obj;
}