import React from 'react';
import './Products.css'
import ring from '../../../assets/products/ring.jpg'
import earing from '../../../assets/products/earing.jpg'
import braclet from '../../../assets/products/braclet.jpg'
import chain from '../../../assets/products/chain.jpg'

const Products = () => {
    return (
        <div>
            <div className='product-text'>
                <div className='product-h1'>
                    <h1>Unveil Your Inner Radiance: <br />Jewels that Reflect Your______!</h1>
                </div>
                <div className='product-p'>
                    <p>Step into a world of unparalleled elegance and sophistication, where every piece of jewelry is a masterpiece waiting to be discovered.</p>
                    <p>At Cresol, we pride ourselves on offering the best jewelry in town, <br />meticulously curated to exceed your expectations. From stunning diamond necklaces to exquisite gemstone rings, our collection showcases the epitome of craftsmanship and luxury. </p>
                    <a href=""> Browse →</a>
                </div>
            </div>
            <div className='product-img'>
                <a href="">
                    <div className="child" id="child1">
                        <img src={ring} alt="" />
                        <div class="overlay">
                            <div className='overlay-txt'>
                                <p>925 Vintage Minimalist Ring</p>
                                <p>Adjustable Size Only for 7-8 sizes</p>
                                <h3>Price : 250 Taka</h3>
                            </div>
                            <a href="#" class="buy-now">Buy Now</a>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="child" id="child2">
                        <img src={earing} alt="" />
                        <div class="overlay">
                        <div className='overlay-txt'>
                                <p>SULTAN Earrings ( non-pierced ear )</p>
                                <p>Cuff System</p>
                                <p>Dimension: 1.3CM wide</p>
                                <h3>Price : 270 Taka</h3>
                            </div>
                            <a href="#" class="buy-now">Buy Now</a>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="child" id="child3">
                        <img src={braclet} alt="" />
                        <div class="overlay">
                        <div className='overlay-txt'>
                                <p>Leather Aromatherapy Bracelet</p>
                                <p> Bracelet Size: Round bead size is 8 mm, Bracelet long: 8.5 and 9 inches</p>
                                <h3>Price : 600 Taka</h3>
                            </div>
                            <a href="#" class="buy-now">Buy Now</a>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div className="child" id="child4">
                        <img src={chain} alt="" />
                        <div class="overlay">
                        <div className='overlay-txt'>
                                <p className='ex'>White Gold Plated Full ICED Square Pendant W/ 24” Rope Chain</p>
                                <p> 28mm x 25mm, Chain: 4mm 24” Rope Chain</p>
                                <h3>Price : 700 Taka</h3>
                            </div>
                            <a href="#" class="buy-now">Buy Now</a>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Products;