import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
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
        <scrien src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></scrien>
      </Head>

      <main>


        <div className="row">
          <div className="col-md-6 col-sm-12 order-md-1 text-center">
              <span className={styles.title}>
                Porfólio Pessoal
              </span>
          </div>
          <div className={`col-md-6 col-sm-12 order-md-4 mb-5 ${styles.grid}`}>
            <Link href="/pt">
              <a className="p-3 border rounded">
                <p className={styles.language_title}>Português &rarr;</p>
                <span>Versão em Português</span>
              </a>
            </Link>
          </div>

          <div className="col-md-6 col-sm-12 order-md-2 text-center">
              <span className={styles.title}>
                  Personal Porfolio
              </span>
          </div>
          <div className={`col-md-6 col-sm-12 order-md-5 mb-5  ${styles.grid}`}>
            <Link href="/en">
              <a className="p-3 border rounded">
                <p className={styles.language_title}>English &rarr;</p>
                <span>English version</span>
              </a>
            </Link>
          </div>

        </div>
      </main>
    </div>
  )
}
