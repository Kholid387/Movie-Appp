import { useState } from "react";
//import Navbar from "../components/navbar/MyNavbar";
import Hero from '../components/Hero/Hero';
import Movies from '../components/Movies/Movies';
import Counter from '../components/Counter';
import AddMovieForm from '../components/AddMovie/AddMovie';
import data from '../utils/constans/data';
import Button from "../components/Button/Index";




function Home({movies}) {

    // const [movies, setMovies] = useState(data);
    // const [movies] = useState(data);
    return(
        <div>

            <main>
                <Hero />
                {/* <Button variant="primary">Lihat</Button>
                 <Button variant="secondary" full>Lihat</Button> */}
                {/* <Movies movies={movies} setMovies={setMovies} /> */}
                <Movies title="lates Movie" movies={movies}/>
                {/* <AddMovieForm movies={movies} setMovies={setMovies} /> */}
                {/* <Counter /> */}

            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default Home;