import React from "react";

import ThemeContext from "./context/ThemeContext";
import Layout from "./components/Layout/Layout";
import PhoneBook from "./components/PhoneBook/PhoneBook";

const App = () => (
  <ThemeContext>
    <Layout>
      <PhoneBook />
    </Layout>
  </ThemeContext>
);

export default App;