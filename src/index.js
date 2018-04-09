import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const ThemeContext = React.createContext("light");

const App = () => (
  <ThemeContext.Provider value="dark">
    <div style={styles}>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
    </div>
    <ThemeContext.Consumer>
      {theme => (<h2>{theme}</h2>)}
    </ThemeContext.Consumer>
  </ThemeContext.Provider>
);

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton(props) {
  // Use a Consumer to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  return (
    <ThemeContext.Consumer>
      {theme => <Button {...props} theme={theme} />}
    </ThemeContext.Consumer>
  );
}

render(<App />, document.getElementById("root"));
