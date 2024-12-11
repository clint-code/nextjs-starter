import Head from 'next/head';
import Layout, { siteTitle, name } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>

        <p>
          Hello there, I'm {name}. I used to live in the Shire but currently reside at the Grey Havens
        </p>

        <p>
          This is after being stabbed by a Nazgul at Weathertop, losing my finger to Gollum on Mount Doom
          and destroying Sauron's One Ring.
        </p>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        
      </section>

    </Layout>
  );
}
