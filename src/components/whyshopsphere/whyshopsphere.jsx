import React from 'react';
import Style from './whyshopsphere.module.css';
import fee from '../../Assets/images/fee.jpg';
import safe from '../../Assets/images/safe.jpg';
import support from '../../Assets/images/support.jpg';
import fast from '../../Assets/images/fast.jpg';
import returnn from '../../Assets/images/return.jpg';
import review from '../../Assets/images/review.jpg'
export default function WhyShopSphere () {
    const cardData = [
        {
            title: "Safe",
            description: "The concept of marketing support product range, regardless of the cost market trends.",
            image: safe
        },
        {
            title: "Low Fee",
            description: "Sponsorship, summing these examples, it is doable. SWOT-analysis, according to Kotler, competitive.",
            image: fee
        },
        {
            title: "Fast",
            description: "Business plan elegantly transforms sublimated pool of loyal editions, optimizing budgets.",
            image:fast
        },
        {
            title: "Quick Support",
            description: "The fact that the advertising platform changes the method of studying the market.",
            image: support

        },
        {
            title: "Flexible Returns",
            description: "Hassle-free return policies to make sure customers are satisfied with their purchases.",
            image: returnn

        },
        {
            title: "Customer Reviews",
            description: "Honest reviews from verified buyers help customers make informed purchasing decisions.",
            image: review

        }
    ];

    return (
        <div className={`container ${Style.container}`}>
            <h1 className="text-center mb-5 title2">Why choose ShopSphere?</h1>
            <div className="row">
                {cardData.map((card, index) => (
                    <div key={index} className="col-md-4 mb-4 ">
                        <div className={`card h-100 ${Style.card}`}>
                            <div className="card-body d-flex flex-column align-items-center">
                                {card.image && <img src={card.image} alt={card.title} className={`mb-3 ${Style.icon}`} />}
                                {card.icon && <i className={`fs-1 mb-3 ${card.icon} ${Style.icon}`}></i>}
                                <h5 className={`card-title mt-3 ${Style['card-title']}`}>{card.title}</h5>
                                <p className={`card-text ${Style['card-text']}`}>{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}