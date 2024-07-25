import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <>

            <div className="loader_bg">
                <div className="loader">
                    <img

                        src="images/loading.gif"
                    />
                </div>
            </div>
            <header>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img style={{ height: '100px' }}
                                                    alt='Logo Rent A Car'
                                                    src="images/logo1.png"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                    <button
                                        aria-controls="navbarsExample04"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                        className="navbar-toggler"
                                        data-target="#navbarsExample04"
                                        data-toggle="collapse"
                                        type="button"
                                    >
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div
                                        className="collapse navbar-collapse"
                                        id="navbarsExample04"
                                    >
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="index.html"
                                                >
                                                    {' '}AnaSayfa
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                >
                                                    Hakkimizda
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                >
                                                    Iletisim
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="sign_btn">
                                            <a href="#">
                                                Giris Yap
                                            </a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="banner_main">
                <div className="container">
                    <div className="row d_flex">
                        <div className="col-md-12">
                            <div
                                className="carousel slide cutomer_Carousel "
                                data-ride="carousel"
                                id="myCarousel"
                            >
                                <ol className="carousel-indicators">
                                    <li
                                        className="active"
                                        data-slide-to="0"
                                        data-target="#myCarousel"
                                    />
                                    <li
                                        data-slide-to="1"
                                        data-target="#myCarousel"
                                    />
                                    <li
                                        data-slide-to="2"
                                        data-target="#myCarousel"
                                    />
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="container">
                                            <div className="carousel-caption ">
                                                <div className="cross_img">
                                                    <figure>
                                                        <img
                                                            alt="#"
                                                            src="images/cross_img.png"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="our cross_layout">
                                                    <div className="test_box">
                                                        <h4>
                                                            Due markes
                                                        </h4>
                                                        <span>
                                                            Rental
                                                        </span>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                                                        </p>
                                                        <i>
                                                            <img
                                                                alt="#"
                                                                src="images/te1.png"
                                                            />
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container">
                                            <div className="carousel-caption">
                                                <div className="cross_img">
                                                    <figure>
                                                        <img
                                                            alt="#"
                                                            src="images/cross_img.png"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="our cross_layout">
                                                    <div className="test_box">
                                                        <h4>
                                                            Due markes
                                                        </h4>
                                                        <span>
                                                            Rental
                                                        </span>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                                                        </p>
                                                        <i>
                                                            <img
                                                                alt="#"
                                                                src="images/te1.png"
                                                            />
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container">
                                            <div className="carousel-caption">
                                                <div className="cross_img">
                                                    <figure>
                                                        <img
                                                            alt="#"
                                                            src="images/cross_img.png"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="our cross_layout">
                                                    <div className="test_box">
                                                        <h4>
                                                            Due markes
                                                        </h4>
                                                        <span>
                                                            Rental
                                                        </span>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                                                        </p>
                                                        <i>
                                                            <img
                                                                alt="#"
                                                                src="images/te1.png"
                                                            />
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    data-slide="prev"
                                    href="#myCarousel"
                                    role="button"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="carousel-control-prev-icon"
                                    />
                                    <span className="sr-only">
                                        Previous
                                    </span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    data-slide="next"
                                    href="#myCarousel"
                                    role="button"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="carousel-control-next-icon"
                                    />
                                    <span className="sr-only">
                                        Next
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
           
        </section >
            <div className="car">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>
                                    VARIETY OF CARS{' '}
                                </h2>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 padding_leri">
                            <div className="car_box">
                                <figure>
                                    <img
                                        alt="#"
                                        src="images/car_img1.png"
                                    />
                                </figure>
                                <h3>
                                    Hundai
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-4 padding_leri">
                            <div className="car_box">
                                <figure>
                                    <img
                                        alt="#"
                                        src="images/car_img2.png"
                                    />
                                </figure>
                                <h3>
                                    Audi
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-4 padding_leri">
                            <div className="car_box">
                                <figure>
                                    <img
                                        alt="#"
                                        src="images/car_img3.png"
                                    />
                                </figure>
                                <h3>
                                    Bmw x5
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bestCar"
                id="contact"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-md-6 offset-md-6">
                                    <form className="main_form">
                                        <div className="titlepage">
                                            <h2>
                                                Find A  Best Car For Rent
                                            </h2>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 ">
                                                <select>
                                                    <option value="0">
                                                        Choose car Make
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="2">
                                                        2
                                                    </option>
                                                    <option value="3">
                                                        3
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-md-12">
                                                <select>
                                                    <option value="0">
                                                        Choose Car Type{' '}
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="2">
                                                        2
                                                    </option>
                                                    <option value="3">
                                                        3
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-md-12">
                                                <input
                                                    className="contactus"
                                                    name="Search"
                                                    placeholder="Search"
                                                    type="Search"
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <select>
                                                    <option value="0">
                                                        Price of Rent
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="2">
                                                        2
                                                    </option>
                                                    <option value="3">
                                                        3
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-sm-12">
                                                <button className="find_btn">
                                                    Find Now
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>
                                    Why Choose Us
                                </h2>
                                <span>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when
                                    <br />
                                    {' '}looking at its layout. The point of using{' '}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="choose_box">
                                <span>
                                    01
                                </span>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making{' '}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="choose_box">
                                <span>
                                    02
                                </span>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making{' '}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="choose_box">
                                <span>
                                    03
                                </span>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cutomer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>
                                    What is says our cutomer
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                className="carousel slide cutomer_Carousel "
                                data-ride="carousel"
                                id="myCarousel"
                            >
                                <ol className="carousel-indicators">
                                    <li
                                        className="active"
                                        data-slide-to="0"
                                        data-target="#myCarousel"
                                    />
                                    <li
                                        data-slide-to="1"
                                        data-target="#myCarousel"
                                    />
                                    <li
                                        data-slide-to="2"
                                        data-target="#myCarousel"
                                    />
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="container">
                                            <div className="carousel-caption ">
                                                <div className="cross_img">
                                                    <figure>
                                                        <img
                                                            alt="#"
                                                            src="images/cross_img.png"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="our cross_layout">
                                                    <div className="test_box">
                                                        <h4>
                                                            Due markes
                                                        </h4>
                                                        <span>
                                                            Rental
                                                        </span>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                                                        </p>
                                                        <i>
                                                            <img
                                                                alt="#"
                                                                src="images/te1.png"
                                                            />
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container">
                                            <div className="carousel-caption">
                                                <div className="cross_img">
                                                    <figure>
                                                        <img
                                                            alt="#"
                                                            src="images/cross_img.png"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="our cross_layout">
                                                    <div className="test_box">
                                                        <h4>
                                                            Due markes
                                                        </h4>
                                                        <span>
                                                            Rental
                                                        </span>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                                                        </p>
                                                        <i>
                                                            <img
                                                                alt="#"
                                                                src="images/te1.png"
                                                            />
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container">
                                            <div className="carousel-caption">
                                                <div className="cross_img">
                                                    <figure>
                                                        <img
                                                            alt="#"
                                                            src="images/cross_img.png"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="our cross_layout">
                                                    <div className="test_box">
                                                        <h4>
                                                            Due markes
                                                        </h4>
                                                        <span>
                                                            Rental
                                                        </span>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                                                        </p>
                                                        <i>
                                                            <img
                                                                alt="#"
                                                                src="images/te1.png"
                                                            />
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    data-slide="prev"
                                    href="#myCarousel"
                                    role="button"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="carousel-control-prev-icon"
                                    />
                                    <span className="sr-only">
                                        Previous
                                    </span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    data-slide="next"
                                    href="#myCarousel"
                                    role="button"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="carousel-control-next-icon"
                                    />
                                    <span className="sr-only">
                                        Next
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="cont_call">
                                    <h3>
                                        {' '}
                                        <strong className="multi color_chang">
                                            {' '}Call Now
                                        </strong>
                                        <br />
                                        (+1) 12345667890
                                    </h3>
                                </div>
                                <div className="cont">
                                    <h3>
                                        {' '}
                                        <strong className="multi">
                                            {' '}Free Multipurpose
                                        </strong>
                                        Responsive Landing Page 2019
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>
                                        © 2019 All Rights Reserved. Design by{' '}
                                        <a href="https://html.design/">
                                            {' '}Free Html Templates
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>




        </>
    )
}

export default Home