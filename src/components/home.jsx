
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {

    return (
        <div className="home-page">
            <h1>Welcome to my super store</h1>
            <h3>Check our amazing catalog</h3>
            <hr />

            <Link className= "btn btn-lg btn-primary" to="/catalog">View Catalog <i class="fa fa-chevron-circle-right" aria-hidden="true"></i></Link>
            <img src="Music-Concert.jpg" alt="" />
        </div>
    );
};

export default Home;