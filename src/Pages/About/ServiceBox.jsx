import React from 'react'
import './Css/serviceBox.css'
const ServiceBox = () => {
    return (
        <>
            <section className='reasons'>
                <div className="reason-container">
                    <h4>Reasons to shop with us</h4>
                    <div className='reason-box'>
                        <div>
                            <h5>Free shipping & return</h5>
                            <p>Free worldwide shipping on all area order above $100</p>
                        </div>
                        <div>
                            <h5>24/7 friendly support</h5>
                            <p>Our support team always ready for you to 7 days a week</p>
                        </div>
                        <div>
                            <h5>7 days easy return</h5>
                            <p>Product any fault within 7 days for an immediately exchange.</p>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default ServiceBox