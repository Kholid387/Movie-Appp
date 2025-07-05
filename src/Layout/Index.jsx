import Navbar from "../components/navbar/MyNavbar";
import Footer from "../components/footer/Footer";

function Layout ({children}) {
    return(
        <>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </>
    );

}
export default Layout;