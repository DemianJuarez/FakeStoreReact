export const Navbar = () => {
  return (
    <nav 
    className="navBar" 
    style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'red',
        width: '100%',
        height: '75px',
    }}>
    <h1 className="navBarTitle"
    style={{
        paddingLeft: '20px',
    }}>TITULO TIENDA GOD</h1>
    </nav>
  )
}
