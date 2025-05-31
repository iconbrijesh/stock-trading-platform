import SignUpFree from '../../../SignUpFree.jsx';

function Hero() {
    return (
        <div className="container p-5">
            <div className='row'>
                <img src="images/homeHero.png" alt='Hero Image' className="mb-6"/>
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more</p>
                <SignUpFree />


            </div>
            
        </div>

    );
}

export default Hero;
