import Link from "next/link";
import Image from "next/image";
import Head  from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>

            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}

            <h1>First Post</h1>

            <Image
                src="/images/f1-logo.png"
                height={200}
                width={400}
                alt="F1-Logo"
            />
        
        </Layout>

    ) 
    
}