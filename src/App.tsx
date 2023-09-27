import { Layout } from "components/layout";
import { Provider } from "react-redux";
import { store } from "services/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/details" element={<div>details</div>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
