import Footer from './Footer';
import NavBar from './NavBar';
import Seo from './Seo';

const Layout = (props) => {
    return (
        <>
            <Seo title={props.title} />
            <NavBar />
            <main>{props.children}</main>
            <Footer />
        </>
    );
};

export default Layout;
