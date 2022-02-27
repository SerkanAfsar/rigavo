import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import img from '/public/images/underconstruction.jpg';
import Link from 'next/link';
import CategoryList from '@/Components/Home/CategoryList';


export default function Home() {
  return (
    <>
      <Head>
        <title>İkinci El ve Sıfır Satılık, Kiralık Deniz Vasıtaları ve Deniz Aracı Ekipmanları İlanları</title>
        <meta name="description" content="Sahibinden satılık tekne fiyatları, ikinci el yat, katamaran, yelkenli, jet ski, gulet, balıkçı teknesi, şişme bot, römorkör, feribot, yolcu gemisi ve tüm deniz ekipmanları rigavo.com'da" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className='container mt-2'>

        <div className='col-3'>
          <CategoryList />
        </div>
        <div className='col-9'></div>
      </div>




    </>



  )
}
