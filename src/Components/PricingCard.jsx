import "./PricingCardStyle.css"

import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing-card">
        <h1 className="pricing">Pricing</h1>
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <h2 className="dollar">$100</h2>
                <p>- 3 Days -</p>
                <p>- 3 Page -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">Purchase Now</Link>
            </div>

            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <h2 className="dollar">$200</h2>
                <p>- 3 Days -</p>
                <p>- 5 Page -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">Purchase Now</Link>
            </div>

            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <h2 className="dollar">$300</h2>
                <p>- 5 Days -</p>
                <p>- 8 Page -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">Purchase Now</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard