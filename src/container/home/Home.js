import React from 'react'
import Button from '../../components/button/Button';
import style from './Home.module.css'
import mob2 from "../../assets/mob2.jpg";
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <>
            <div className={style.home_container}>
                <header className={style.head}>
                    <div>
                        <div className={style.logo}>
                            <img src='https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg' />
                        </div>

                    </div>
                    <h3> AusBang</h3>
                    <div >
                        <i class="fa fa-bars">
                        </i>
                    </div>
                </header>
                <Link to="/shop">
                        <Button content="Go  to Shop" />
                    </Link>
                <div className={style.sec_one}>
                    <h3 className={style.common_heading}> An Easier Responsive Banking</h3>

                    


                    <p className={style.commom_para}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </p>

                    <div className={[style.mid, "flex_contianer"].join(" ")}>
                        <Button content="Download App" />
                        <div className={style.rating}>
                            <span className={style.star}>
                                <i class="fa fa-star"></i>

                            </span>
                            5.0
                        </div>
                        <div>6T Reviews</div>
                    </div>
                    <div className={style.sec_five}>
                        <img src={mob2} alt="Trulli" height="333" />
                    </div>
                </div>

                <div className={style.sec_two}>
                    <div className={[style.glass_rism_flower].join(" ")}>
                        <div >
                            <div className={[style.glassmorohism, style.rightbottom].join(" ")}>1.6M </div>
                            <div className={[style.glassmorohism, style.righttop].join(" ")}>1.6M </div>

                        </div>
                        <div>
                            <div className={[style.glassmorohism, style.leftbottom].join(" ")}>1.6M </div>
                            <div className={[style.glassmorohism, style.lefttop].join(" ")}>2 </div>
                        </div>
                    </div>
                    {/* <div style={{color:'#FFF'}}>
                    <i class='fas fa-arrow-right'></i>
                    </div> */}
                    <h3 className={style.common_heading}> helping australia grow</h3>
                    <p className={style.commom_para}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </p>
                    <div className={[style.mid, "flex_contianer"].join(" ")}>
                        <Button content="More Fact & Figures" />
                    </div>
                </div>
                <div className={style.sec_three}>
                    <h3 className={style.common_heading}>Our Services</h3>

                    <div className={style.list_cont}>
                        <div className={style.list_heading}>Banking</div>
                        <div>Personal loans</div>
                        <div>credits card</div>
                        <div> card</div>
                    </div>
                    <div className={style.list_cont}>
                        <div className={style.list_heading}>Home Loan </div>
                        <div>Loan customer</div>
                        <div> card</div>
                        <div> card</div>
                    </div>
                </div>

                {/* sec 4 */}
                <div className={style.sec_four}>
                    <h3 className={style.common_heading}>Loan customers </h3>
                    <p className={style.commom_para}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </p>

                    <div className={style.QandA}>
                        <div >
                            cancel pandeng transsaction?
                            <i class='fas fa-chevron-right'></i>

                        </div>
                        <div >
                            cancel pandeng transsaction?
                            <i class='fas fa-chevron-right'></i>

                        </div>
                        <div >
                            cancel pandeng transsaction?
                            <i class='fas fa-chevron-right'></i>

                        </div>
                        <div >
                            cancel pandeng transsaction?
                            <i class='fas fa-chevron-right'></i>

                        </div>
                    </div>
                </div>
                <div className={style.sec_five}>
                    <img src={mob2} alt="Trulli" height="333" />
                </div>
                <div>
                    <i class='fas fa-arrow-down'></i>
                </div>
                <h3 className={style.style = 'font-size:24px'}>Sign up For Our News Letter </h3>
                <input className={style.input_email} type="text" name="email" placeholder="Enter your Email Adress.." />
                <Button content="Suscribe" />
            </div>

        </>

    )
}


export default Home;