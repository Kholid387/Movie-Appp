import Navbar from "../components/navbar/MyNavbar.jsx"; // ← .jsx WAJIB disebut
import Footer from "../components/footer/Footer.jsx";   // ← .jsx WAJIB disebut

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