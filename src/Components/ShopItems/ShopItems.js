import React from 'react';
import './ShopItems.css';
import burger1 from './../../images/burger-1.jpg';
import burger2 from './../../images/burger-2.jpg';
import burger3 from './../../images/burger-3.jpg';
import fries1 from './../../images/fries-1.jpg';
import fries2 from './../../images/fries-2.jpg';
import fries3 from './../../images/fries-3.jpg';

const ShopItems = () => {
    return (
        <div>
            <h1 id="shop-title">SHOP</h1>
            <div className="food-items">
                <div className="food-item">
                    <img height="225px" width="300px" src={burger1} alt="" />
                    <h3>Price: $5</h3>
                    <h2>Chicken Burger</h2>
                    <div>Rating: 5<i class="fas fa-star"></i></div>
                    <button className="btn btn-warning">Order Now</button>
                </div>
                <div className="food-item">
                    <img height="300px" width="250px" src={burger2} alt="" />
                    <h3>Price: $7</h3>
                    <h2>Beef Burger</h2>
                    <div>Rating: 4.9<i class="fas fa-star"></i></div>
                    <button className="btn btn-warning">Order Now</button>
                </div>
                <div className="food-item">
                    <img height="200px" width="250px" src={burger3} alt="" />
                    <h3>Price: $3</h3>
                    <h2>Veggie Burger</h2>
                    <div>Rating: 4.5<i class="fas fa-star"></i></div>
                    <button className="btn btn-warning">Order Now</button>
                </div>
                <div className="food-item">
                    <img height="200px" width="300px" src={fries1} alt="" />
                    <h3>Price: $2</h3>
                    <h2>Potato Wedges Fries</h2>
                    <div>Rating: 4.6<i class="fas fa-star"></i></div>
                    <button className="btn btn-warning">Order Now</button>
                </div>
                <div className="food-item">
                    <img height="200px" width="300px" src={fries2} alt="" />
                    <h3>Price: $2</h3>
                    <h2>Sweet Potato Fries</h2>
                    <div>Rating: 4.8<i class="fas fa-star"></i></div>
                    <button className="btn btn-warning">Order Now</button>
                </div>
                <div className="food-item">
                    <img height="200px" width="300px" src={fries3} alt="" />
                    <h3>Price: $2</h3>
                    <h2>Potato Tornado Fries</h2>
                    <div>Rating: 4.4<i class="fas fa-star"></i></div>
                    <button className="btn btn-warning">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShopItems;