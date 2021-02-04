import React from 'react';
import img from '../../../../Images/1534323249429.jpg';

const HeaderMain = () => {
    return (
        <div style={{marginTop: '112px'}}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <marquee behavior="scroll" direction="left" scrollamount='5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nihil quod deleniti reiciendis quas delectus beatae non cum saepe totam.</marquee>
        </div>
    );
};

export default HeaderMain;