import Header from './header';

const layoutStyles = {
    margin: 20,
    padding: 20,
    border: '1px solid #eeeeee'
}

const Layout = props => {
    return(
        <div style={layoutStyles}>
            <Header/>
            {props.children}
        </div>
    )
}

export default Layout;