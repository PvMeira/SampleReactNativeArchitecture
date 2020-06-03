import * as React from "react";
import "./ReactotronConfig";
import { theme } from "./src/core/theme";
import PaperProvider from "react-native-paper";
import Home from "./src/pages/Home";
import { Provider } from "react-redux";
import store from './src/store/store'

const App = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <Home></Home>
    </PaperProvider>
    </Provider>
);
export default App;
