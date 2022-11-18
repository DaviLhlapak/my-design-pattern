import Article from 'components/home/article'

import type { NextCustomPage } from 'next'
import { FaFolder } from 'react-icons/fa'

const Home: NextCustomPage = () => {
    return (
        <section className="container h-screen flex flex-col items-center justify-center space-y-8">
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
