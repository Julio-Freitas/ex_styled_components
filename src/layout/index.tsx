
type LayoutType = {
    children: React.ReactNode
}

const Layout = ({children}:LayoutType) => {
    return <div style={{  flexWrap: 'nowrap',   padding: '0 19px', maxWidth:'1260px', margin: '0 auto', background: 'red',}}>{children}</div>
}

export default Layout