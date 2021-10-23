import React from 'react';
import { Carousel } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Banner.css';

const Banner = () => {
    const { prod } = useAuth();
    const { products } = prod;
    const img0 = products[0]?.filename;
    const img1 = products[1]?.filename;
    const img2 = products[2]?.filename;
    const img3 = products[3]?.filename;
    const img4 = products[4]?.filename;
    const img5 = products[5]?.filename;

    const title0 = products[0]?.title;
    const title1 = products[1]?.title;
    const title2 = products[2]?.title;
    const title3 = products[3]?.title;
    const title4 = products[4]?.title;
    const title5 = products[5]?.title;

    const desc0 = products[0]?.description;
    const desc1 = products[1]?.description;
    const desc2 = products[2]?.description;
    const desc3 = products[3]?.description;
    const desc4 = products[4]?.description;
    const desc5 = products[5]?.description;

    return (
        <Carousel fade className="carousel-custom" id="banner">
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img0}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{title0}</h3>
                    <p>{desc0}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>{title1}</h3>
                    <p>{desc1}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>{title2}</h3>
                    <p>{desc2}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>{title3}</h3>
                    <p>{desc3}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>{title4}</h3>
                    <p>{desc4}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img5}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>{title5}</h3>
                    <p>{desc5}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;