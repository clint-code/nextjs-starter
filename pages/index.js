import Head from 'next/head';
import Layout, { siteTitle, name } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  
  console.log("Posts:", allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>

        <p>
          Hello there, I'm {name}. I used to live in  Bag-End in the Shire but currently reside at the Grey Havens
        </p>

        <p>
          This is after being stabbed by a Nazgul at Weathertop, losing my finger to Gollum on Mount Doom
          and destroying Sauron's One Ring.
        </p>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn" target='_blank'>our Next.js tutorial</a>.)
        </p>
        
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title}) => (
              <li className={utilStyles.listItem} key ={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
      </section>


    </Layout>
  );
}
