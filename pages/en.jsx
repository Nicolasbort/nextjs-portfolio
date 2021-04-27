import Head         from 'next/head'
import Navbar       from '../components/Navbar'
import Header       from '../components/Header'
import Portfolio    from '../components/Portfolio'
import About        from '../components/About'
import Contact      from '../components/Contact'
import Headings     from '../lib/Headings'
import PersonalInfo from '../lib/PersonalInfo'
import Jobs         from '../lib/Portfolio'

export default function PagePortuguese() {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="/favicon.ico" />

                {/* Font Awesome */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
                
                {/* Google fonts */}
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />

                {/* Bootstrap 5 */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/>
                <scrien src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></scrien>
            </Head>

            <Navbar 
            name={PersonalInfo.general.name} 
            portfolio={Headings.en.portfolio} 
            about={Headings.en.about} 
            contact={Headings.en.contact}
            />

            <Header 
            name={PersonalInfo.general.name} 
            field={PersonalInfo.en.field}
            />

            <Portfolio 
            portfolio={Headings.en.portfolio}
            filter={Headings.en.filter}
            jobs={Jobs.en}
            />

            <About 
            title={Headings.en.about} 
            about={PersonalInfo.en.about}
            />

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