const Layout = ({ children }: { children: React.ReactNode }) => {

 return (
    <div>
        <h1>Navbar</h1>
        <h1>This is dashboard layout</h1>
        {children}
    </div>
 )

}


export default Layout;