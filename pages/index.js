import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import img from '/public/images/underconstruction.jpg';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Rigavo | Satılık Yatlar | Kiralık Yatlar | Yat Dünyası</title>
        <meta name="description" content="Rigavo | Satılık Yatlar | Kiralık Yatlar | Yat Dünyası" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-xl-8 col-lg-8">
              <Image src={img} blurDataURL={img} placeholder="blur" layout='responsive' />
              <br />
              <div className={styles.infoCls}>
                <i className="bi bi-envelope-fill"></i> <a href="mailto:info@rigavo.com">info@rigavo.com</a>
              </div>
              <div className={styles.infoCls}>
                <i className="bi bi-info-circle-fill"></i>
                <Link href="/">
                  <a>www.rigavo.com</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>



  )
}
