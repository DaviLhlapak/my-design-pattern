interface LayoutProps {
    children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="w-full min-h-screen h-full flex flex-col items-center">
            <main className="w-full h-full flex-grow flex flex-col items-center">
                {children}
            </main>
        </div>
    )
}

export default Layout
