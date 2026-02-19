const Layout = ({ children }: { children: React.ReactNode }) => {

 return (
    <div>
        <div>Dashboard header</div>
        <h1>This is dashboard layout</h1>
        {children}
        <div>Dashboard footer</div>
    </div>
 )

}


export default Layout;