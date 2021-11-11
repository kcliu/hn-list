import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {HnItem} from "../components/HnItem/HnItem";
import {useEffect, useState} from "react";

const Home: NextPage = () => {
    const [storyIds, setStoryIds] = useState<number[]>([])
    useEffect(() => {
            fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`, {method: "GET"}).then(res => res.json()).then(res => {
                setStoryIds(res.slice(0, 100))
            })
        }, []
    )
    return (
        <div className={styles.container}>
            <Head>
                <title>Hacker News List</title>
                <meta name="description" content="Hacker News List"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hacker News List
                </h1>
                <div>
                    {
                        storyIds.map((id, i) => {
                            return <HnItem key={i} storyId={id}/>

                        })
                    }
                </div>


            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    );
}

export default Home
