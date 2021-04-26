import Head         from 'next/head'
import Navbar       from '../components/Navbar'
import Header       from '../components/Header'
import Portfolio    from '../components/Portfolio'
import About        from '../components/About'
import Contact      from '../components/Contact'
import Headings     from '../lib/Headings'
import PersonalInfo from '../lib/PersonalInfo'

export default function PagePortuguese() {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="/favicon.ico" />

                {/* Font Awesome */}
                <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossOrigin="anonymous"></script>
                
                {/* Google fonts */}
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />

                {/* Bootstrap 5 */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
            </Head>

            <Navbar name={PersonalInfo.general.name} portfolio={Headings.pt.portfolio} about={Headings.pt.about} contact={Headings.pt.contact}/>

            <Header name={PersonalInfo.general.name} field={PersonalInfo.pt.field}/>

            <Portfolio portfolio={Headings.pt.portfolio}/>

            <About title={Headings.pt.about} about={PersonalInfo.pt.about}/>

            <Contact 
            title={Headings.pt.contact} 
            linkedin={PersonalInfo.general.linkedin} 
            github={PersonalInfo.general.github}
            email={PersonalInfo.general.email}
            cellphone={PersonalInfo.general.cellphone}
            />
        </>
    );
}