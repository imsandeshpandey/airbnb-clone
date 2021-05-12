import './App.less'
import { ThemeProvider } from "styled-components";
import Header from "./header";
import Page from "./Page";
import Footer from "./Footer";
import theme from "./components/theme";
import Box from './components/box';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Page />
      <Footer />
      <Box></Box>
    </ThemeProvider>
  );
}

export default App;
