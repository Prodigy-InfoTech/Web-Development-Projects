import Button from '@mui/material/Button';

export default function Hero(){
    return(
        <div className="container p-5">
            <div className="row text-center">
                <div className="col">
                    <img src="/media/images/homeHero.png" className="img-fluid mb-3" alt="HeroImage"/>
                    <h1 className="mt-3 p-3">Invest in everything</h1>
                    <p className='fs-4 text-muted p-3'>
                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                    <Button variant='contained' className='p-3' style={{"width":"30%"}}>Sign up for free</Button>
                </div>
            </div>
        </div>  
    )
}