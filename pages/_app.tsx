import '../styles/globals.css'
import type { AppCustomProps } from 'next/app'

import Layout from 'components/layout'

import { SessionProvider } from 'next-auth/react'

function CustomApp({
    Component,
    pageProps: { session, ...pageProps }
}: AppCustomProps) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    )
}

export default CustomApp
