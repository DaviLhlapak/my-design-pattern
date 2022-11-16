export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <head>
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="robots" content="index,follow" />
            </head>
            <body className="min-h-screen h-full w-full font-sans">
                <main className="w-full h-full flex-grow flex flex-col items-center [&>div]:w-full">
                    {children}
                </main>
            </body>
        </html>
    )
}
