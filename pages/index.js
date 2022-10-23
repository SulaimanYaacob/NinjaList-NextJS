import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nostrum
          quis necessitatibus, quasi deleniti expedita obcaecati, eaque libero
          sed at autem rerum, voluptate natus beatae ut quam incidunt pariatur
          laudantium!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nostrum
          quis necessitatibus, quasi deleniti expedita obcaecati, eaque libero
          sed at autem rerum, voluptate natus beatae ut quam incidunt pariatur
          laudantium!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
