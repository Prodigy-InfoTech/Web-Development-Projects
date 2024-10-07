import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
export default function Footer() {
    return (
        <div className="container-fluid footer p-5" style={{ "backgroundColor": "rgb(247,246,242)" }}>
            <div className="row dflex justify-content-between">
                <div className="col-md-3">
                    <img src="/media/images/logo.svg" className="img-fluid mb-4" alt="HeroImage" style={{ "width": "50%" }} />
                    <p className='mb-3'>
                        © 2010 - 2024, Zerodha Broking Ltd. <br />
                        All rights reserved.
                    </p>

                    <div className='mt-4'>
                        <InstagramIcon className='me-3' fontSize='medium' />
                        <XIcon className='me-3' fontSize='medium' />
                        <LinkedInIcon className='me-3' fontSize='medium' />
                        <FacebookIcon fontSize='medium' />
                    </div>
                    <hr />
                    <div className='mt-3'>
                        <TelegramIcon className='me-4' fontSize='medium' />
                        <WhatsAppIcon className='me-4' fontSize='medium' />
                        <YouTubeIcon className='me-4' fontSize='medium' />

                    </div>

                </div>
                <div className="col-md-3">
                    <ul style={{ "listStyle": "none" }} className='text-muted'>
                        <h3 className='mb-3'>Company</h3>
                        <li className='mb-2'>About</li>
                        <li className='mb-2'>Products</li>
                        <li className='mb-2'>Pricing</li>
                        <li className='mb-2'>Referral Programme</li>
                        <li className='mb-2'>Carrers</li>
                        <li className='mb-2'>Zerodha Tech</li>
                        <li className='mb-2'>Press & media</li>
                        <li className='mb-2'>Zerodha Cares (CSR)</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul style={{ "listStyle": "none" }} className='text-muted'>
                        <h3 className='mb-3'>Support</h3>
                        <li className='mb-2 mt-2'>Contact us</li>
                        <li className='mb-2'>Support portal</li>
                        <li className='mb-2'>Z-Connect blog</li>
                        <li className='mb-2'>List of charges</li>
                        <li className='mb-2'>Downloads & resources</li>
                        <li className='mb-2'>Videos</li>
                        <li className='mb-2'>Market overview</li>
                        <li className='mb-2'>How to file a complaint?</li>
                        <li className='mb-2'>Status of your complaints</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul style={{ "listStyle": "none" }} className='text-muted'>
                        <h3 className='mb-3'>Account</h3>
                        <li className='mb-2'>Open an account</li>
                        <li className='mb-2'>Fund transfer</li>
                    </ul>
                </div>
            </div>

            <div className="row text-muted p-5 mt-3" style={{ "fontSize": "10px" }}>
                <p className='ps-5 pe-5'>
                    Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p className='ps-5 pe-5'>
                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p>

                <p className='ps-5 pe-5' style={{ "color": "blue" }}>
                    Smart Online Dispute Resolution | Grievances Redressal Mechanism
                </p>

                <p className='ps-5 pe-5'>
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                </p>

                <p className='ps-5 pe-5'>
                    Attention investors:
                    1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020.
                    2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                </p>

                <p className='ps-5 pe-5'>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                </p>
            </div>
            <div className='ps-5 pe-5' style={{"fontSize":"small"}}>
                <nav className="nav dflex justify-content-between">
                    <a className="nav-link active" aria-current="page" href="#">NSE</a>
                    <a className="nav-link" href="#">BSE</a>
                    <a className="nav-link" href="#">MCX</a>
                    <a className="nav-link" href="#">Terms and Conditions</a>
                    <a className="nav-link" href="#">Policies & procedures</a>
                    <a className="nav-link" href="#">Privacy policy</a>
                    <a className="nav-link" href="#">Disclosure</a>
                    <a className="nav-link" href="#">For investers attention</a>
                    <a className="nav-link" href="#">Invester Charter</a>
                </nav>

            </div>

        </div>
    )
}