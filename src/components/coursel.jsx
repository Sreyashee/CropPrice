import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
let Coursel = () => {
    return (
        
        <div id="carouselExampleCaptions" class="carousel slide ">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner ">
                <div class="carousel-item active carousel-container">
                    <img src="public\rice.jpg" class="d-block w-100 carousel-image" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                       <button className="btn btn-secondary">
                         <h5>RICE</h5> 
                         </button>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                    <div class="carousel-item carousel-container">
                        <img src="public\maize.jpg" class="d-block w-100 carousel-image" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                           <button className="btn btn-secondary">
                         <h5>MAIZE</h5> 
                         </button>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item carousel-container">
                        <img src="public\wheat.jpg" class="d-block w-100 carousel-image" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                        <button className="btn btn-secondary">
                         <h5>WHEAT</h5> 
                         </button>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
            </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
        </div>


       
                    
);
};
export default Coursel;