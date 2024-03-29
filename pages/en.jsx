import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Headings from '../lib/Headings';
import PersonalInfo from '../lib/PersonalInfo';
import Jobs from '../lib/Portfolio';

export default function PageEnglish() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />

        {/* Google fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <Navbar
        name={PersonalInfo.general.name}
        portfolio={Headings.en.portfolio}
        about={Headings.en.about}
        contact={Headings.en.contact}
      />

      <Header name={PersonalInfo.general.name} field={PersonalInfo.en.field} />

      <Portfolio
        portfolio={Headings.en.portfolio}
        filter={Headings.en.filter}
        tools={Headings.en.tools}
        jobs={Jobs.en}
      />

      <About title={Headings.en.about} about={PersonalInfo.en.about} />

      <Contact
        title={Headings.en.contact}
        linkedin={PersonalInfo.general.linkedin}
        github={PersonalInfo.general.github}
        email={PersonalInfo.general.email}
        cellphone={PersonalInfo.general.cellphone}
        location={PersonalInfo.general.location}
        isPortuguese={false}
      />
    </>
  );
}
