import '../styles/homepage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import HomepageImage from '../assets/homepageImage';


function Homepage() {
    return (
        <div className="homepage-container">
            <Header />

            {/* <div className="picture">
                <img src={HomepageImage} alt="HomepageImage" />
            </div> */}
            <Footer />
        </div>
    )
}

export default Homepage;