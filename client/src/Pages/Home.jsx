import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div>
            <header className="header">
                <div>
                    <h1 className='p-4 text-center font-monospace'>Papad Store</h1>
                </div>

                <div className='d-flex justify-content-center'>
                    <nav className="navbar navbar-expand-lg fs-5">
                        <div className="container-fluid">
                            <Link to={'/productList'} style={{textDecoration: 'none'}}>
                                <h2><span className="badge text-bg-secondary">Products</span></h2>
                            </Link>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/myPendingOrder/'} style={{textDecoration: 'none'}}>
                                            <a className="nav-link" href="">Pending Orders</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/myDeliveredOrder/'} style={{textDecoration: 'none'}}>
                                            <a className="nav-link" href="#">confirmed Orders</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/ContactUs/'} style={{textDecoration: 'none'}}>
                                            <a className="nav-link" href="#">contact us</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/AboutUs/'} style={{textDecoration: 'none'}}>
                                            <a className="nav-link" href="#">About us</a>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </header>
            <main>

                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src='https://st4.depositphotos.com/19960896/28979/i/450/depositphotos_289794242-stock-photo-gujarati-papad-papadum-raw-dried.jpg'
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.firaana.com/cdn/shop/collections/papads.jpg?v=1619850617"
                                 className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://media.istockphoto.com/id/666595984/photo/indian-snacks-deep-fried-crackers-or-papad-mung-dal-and-urad-dal-papad-an-indian-fried-dish.jpg?s=612x612&w=0&k=20&c=WNBWP2z6sXYhPSFbfxmVJe1oVkWtQHY-lc7RbWeM84o="
                                className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div className='p-4 ' style={{height: '500px'}}>
                    <p className='text-center'>
                        <button className="border-0 fs-1 font-monospace" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseWidthExample" aria-expanded="false"
                                aria-controls="collapseWidthExample">
                            Our Vision
                        </button>
                    </p>
                    <div className="collapse" id="collapseWidthExample">
                        <div className="card card-body fs-3 border-0 text-center p-4">
                            "Empowering palates and nourishing communities through our commitment to quality,
                            innovation, and sustainability in every step of our food processing journey."
                        </div>
                    </div>
                </div>

                <div className='p-4 ' style={{height: '500px'}}>
                    <p className='text-center'>
                        <button className="border-0 fs-1 font-monospace" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseWidthExample" aria-expanded="false"
                                aria-controls="collapseWidthExample">
                            Our Mission
                        </button>
                    </p>
                    <div className="collapse" id="collapseWidthExample">
                        <div className="card card-body fs-3 border-0 text-center p-4">
                            "Our mission is to enrich lives by crafting delicious, nutritious, and ethically sourced
                            food products that delight consumers and contribute to a healthier, more sustainable world."
                        </div>
                    </div>
                </div>


            </main>
            <footer className='mt-5 p-4 bg-black text-white text-center' style={{fontSize: '14px', lineHeight: '1.5'}}>
                <div className="container">
                    <p>&copy; 2024 Your Food Processing Company. All rights reserved.</p>
                    <p>For inquiries, contact us at <a href="mailto:info@example.com" style={{
                        color: '#fff',
                        textDecoration: 'underline'
                    }}>PapadStore1999@gmail.com</a></p>
                </div>
            </footer>

        </div>
    )
}

export default Home;