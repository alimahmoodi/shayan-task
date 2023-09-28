import { Layout } from "components/layout";
import { Provider } from "react-redux";
import { store } from "services/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "components/details";
import { ThemeProvider, createTheme } from "@mui/material";
import { Root } from "components/root";

const theme = createTheme({
  typography: {
    fontFamily: ["vazir"].join(","),
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<Root />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
