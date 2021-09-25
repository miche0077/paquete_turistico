
import { Banner } from "./components/Banner";
import { EstickyFooter } from "./components/EstickyFooter";
import { Explanation } from "./components/Explanation";
import { Presentation } from "./components/Presentation";
import { Layout } from "./components/Layout";
import { ThemeProvider, createTheme} from "@material-ui/core";

 function App() {
  const theme = createTheme({
    breakpoints:{
      values:{
        xxs:320,
        xs:480,
        sm:640,
        md:768,
        lg:1024,
        xl:1220,
        xxl:1366,
        xxxl:1620,
      }
    }
  })

  return(
  <ThemeProvider theme={theme}>
  <Layout >
  <Banner  />
  <Explanation /> 
  <Presentation />
  <EstickyFooter />
  </Layout>
</ThemeProvider>

  );
}

 export default App;
