/* 
@Component : LandingPage
@Service : A default landing page at '/' root
@requires : components,styles,images from parent directory

*/
import Hero from "./components/Hero";
import Header from "./components/Header";
import Section from "./components/Section";
import Testimonial from "./components/Testimonial";

import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },});

//landing page component
function LandingNewPage() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* all below components are dependencies */}
      {/* imported at top */}
      <Header />
      <Hero />
      <Section />
      <AboutUs />
      <Testimonial />
      <Footer />
      </ThemeProvider>
    </>

  );
}

export default LandingNewPage;