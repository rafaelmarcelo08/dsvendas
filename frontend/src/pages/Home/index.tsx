import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />

            <div className="container my-5">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>

                    <div className="btn">
                        <Link to='/dashboard' className='btn-acessar btn-lg'>Acessar dashboard</Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;