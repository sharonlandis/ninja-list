import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex, esse
          illo nihil quis nesciunt. Quia vel laborum blanditiis dolorum at quo
          tempore est, nisi unde aliquam illum veniam sapiente.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex, esse
          illo nihil quis nesciunt. Quia vel laborum blanditiis dolorum at quo
          tempore est, nisi unde aliquam illum veniam sapiente.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
