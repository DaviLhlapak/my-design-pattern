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
            <body className="min-h-screen h-full font-sans">{children}</body>
        </html>
    )
}
