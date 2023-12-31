import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const handleClick = () => {
    // Track button click event
    // ReactGA.event({
    //   category: "User Interaction",
    //   action: "Button Click",
    //   label: "Custom Label (Optional)",
    // });
    // alert("button click");
    gtag('event', 'form_submission', {
      event_category: 'Button Interaction',
      event_label: 'Button Clicked',
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1> Google analytics demo</h1>
        <p>this is fillinx demo page testing </p>
        <div className="google">
          <button onClick={handleClick}>
            <Link href="/about">about</Link>
          </button>
          <Link href="/contact">Contact</Link>
          <Link href="/product">product</Link>
        </div>
      </main>
    </div>
  );
}
