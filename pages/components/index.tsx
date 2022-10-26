import type { NextCustomPage } from 'next'
import Head from 'next/head'

const Components: NextCustomPage = () => {
    return (
        <article className="container h-screen flex flex-col items-center justify-center space-y-8">
            <Head>
                <title>Componentes</title>
            </Head>

            <header>
                <h1 className="font-bold text-3xl text-violet-700">
                    Componentes
                </h1>
            </header>
        </article>
    )
}

export default Components
