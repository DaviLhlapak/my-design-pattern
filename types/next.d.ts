import type { AppProps } from 'next/app'

import { NextComponentType, NextPageContext, NextCustomPage } from 'next'

declare module 'next' {
    type NextCustomPage<P = {}> = NextComponentType<NextPageContext, any, P> & {
        config?: {
            disableLayout?: boolean
        }
    }
}

declare module 'next/app' {
    type AppCustomProps<P = {}> = AppProps & {
        Component: NextCustomPage
    }
}
