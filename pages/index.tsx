import type { NextPage } from 'next'
import Head from 'next/head'

import Article from 'components/home/article'

import {
    FaFilter,
    FaFolder,
    FaGlobeAmericas,
    FaLock,
    FaPalette
} from 'react-icons/fa'

const Home: NextPage = () => {
    return (
        <section className="container h-screen flex flex-col items-center justify-center space-y-8">
            <Head>
                <title>My Design Pattern</title>
            </Head>

            <header>
                <h1 className="font-bold text-3xl text-violet-700">
                    My Design Pattern
                </h1>
            </header>

            <div className="grid grid-cols-3 gap-4">
                <Article
                    title="Components"
                    icon={<FaFolder />}
                    link="/components/"
                />
            </div>
        </section>
    )
}

export default Home
