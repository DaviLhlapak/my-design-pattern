import type { NextPage } from 'next'

import Article from 'components/home/article'

import { FaFolder, FaGlobeAmericas, FaLock, FaPalette } from 'react-icons/fa'

const Home: NextPage = () => {
    return (
        <section className="w-screen h-screen flex flex-col items-center justify-center space-y-5">
            <header>
                <h1 className="font-bold text-3xl text-violet-700">
                    My Design System
                </h1>
            </header>

            <div className="grid grid-cols-2 gap-4">
                <Article
                    title="Data Fetching"
                    icon={<FaGlobeAmericas />}
                    link="/data-fetch/"
                />
                <Article
                    title="Authentication"
                    icon={<FaLock />}
                    link="/authentication/"
                />
                <Article title="Layout" icon={<FaPalette />} link="/layouts/" />
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
