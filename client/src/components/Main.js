import React, { useContext, useEffect, useState } from 'react';
import logo from '../img/logo.png';
import { getItems } from '../actions/item';
import { DefaultContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';

export const Main = () => {

    const navigate = useNavigate();
    const { items, setItems } = useContext(DefaultContext);
    const [search, setSearch] = useState("");
    const [slides, setSlides] = useState(window.innerWidth / 500);
    
    const arraySF = items?.filter(item => item?.name?.split(' ').filter(word => word.substring(0, search.length).toLowerCase() === search.toLowerCase()).length > 0).sort((a, b) => b.ordered - a.ordered);

    useEffect(() => {
        getItems().then(res => setItems(res));
    }, [])

    function resize() {
        setSlides(Math.round(window.innerWidth / 500));
    }
    
    window.onresize = resize;

    return (
        <div>
            <header className="stone__header">
                <img className="stone__logo" src={logo} alt="logo"/>
                <div className='stone__container'>
                    <h1 className="stone__title">КЕРАМОГРАНИТ</h1>
                    <h2 className="stone__subtitle">ГАРАНТИРОВАННОЕ<br/>КАЧЕСТВО</h2>
                    <div className="stone__feauterus">
                        <svg className="stone__feauter" width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.79914 16.1701C9.0026 16.1549 9.17657 16.0829 9.32103 15.954C9.46481 15.8245 9.5367 15.6686 9.5367 15.4862C9.5367 15.2734 9.4604 15.1025 9.3078 14.9736C9.1552 14.8441 8.96022 14.787 8.72284 14.8022C8.02768 14.8478 7.29012 14.6769 6.51018 14.2897C5.73024 13.9018 5.23854 13.1986 5.03508 12.1803C5.00117 12.0131 4.91198 11.8763 4.76752 11.7699C4.62374 11.6635 4.4586 11.6103 4.27209 11.6103C4.03472 11.6103 3.83973 11.6899 3.68713 11.8492C3.53454 12.0091 3.48367 12.1955 3.53454 12.4083C3.82278 13.7914 4.50099 14.7794 5.56917 15.3722C6.63735 15.9649 7.71401 16.2309 8.79914 16.1701ZM8.51938 18.906C6.19651 18.906 4.25954 18.1917 2.70848 16.7629C1.15673 15.3342 0.380859 13.5558 0.380859 11.4279C0.380859 9.90795 1.055 8.25516 2.40328 6.46952C3.75089 4.68327 5.78958 2.74899 8.51938 0.666656C11.2492 2.74899 13.2882 4.68327 14.6365 6.46952C15.9841 8.25516 16.6579 9.90795 16.6579 11.4279C16.6579 13.5558 15.882 15.3342 14.3303 16.7629C12.7792 18.1917 10.8423 18.906 8.51938 18.906ZM8.51938 17.0821C10.2827 17.0821 11.7409 16.5465 12.8938 15.4752C14.0468 14.4034 14.6233 13.0542 14.6233 11.4279C14.6233 10.3183 14.1105 9.06438 13.0851 7.66602C12.059 6.26767 10.5371 4.74012 8.51938 3.08338C6.50171 4.74012 4.98014 6.26767 3.95469 7.66602C2.92856 9.06438 2.41549 10.3183 2.41549 11.4279C2.41549 13.0542 2.99197 14.4034 4.14493 15.4752C5.29788 16.5465 6.75603 17.0821 8.51938 17.0821Z" fill="#F7F7F7"/>
                        </svg>                               
                        <svg className="stone__feauter" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.72678 19.73C7.73601 19.7289 6.78616 19.3692 6.08558 18.7298C5.385 18.0903 4.99089 17.2233 4.98971 16.319H6.48454C6.48454 16.7238 6.61604 17.1195 6.86242 17.4561C7.10881 17.7926 7.459 18.0549 7.86871 18.2098C8.27843 18.3647 8.72927 18.4053 9.16422 18.3263C9.59918 18.2473 9.99871 18.0524 10.3123 17.7662C10.6259 17.48 10.8394 17.1153 10.9259 16.7183C11.0125 16.3213 10.9681 15.9098 10.7983 15.5358C10.6286 15.1619 10.3412 14.8422 9.97251 14.6173C9.60377 14.3925 9.17026 14.2724 8.72678 14.2724H2.00005V12.908H8.72678C9.71792 12.908 10.6685 13.2674 11.3693 13.9071C12.0701 14.5468 12.4639 15.4144 12.4639 16.319C12.4639 17.2237 12.0701 18.0913 11.3693 18.731C10.6685 19.3707 9.71792 19.73 8.72678 19.73Z" fill="#F7F7F7"/>
                            <path d="M17.2881 16.319C16.2973 16.318 15.3475 15.9661 14.6469 15.3405C13.9463 14.715 13.5522 13.8668 13.551 12.9822H15.0458C15.0458 13.3782 15.1773 13.7652 15.4237 14.0945C15.6701 14.4237 16.0203 14.6804 16.43 14.8319C16.8397 14.9834 17.2906 15.0231 17.7255 14.9458C18.1605 14.8686 18.56 14.6779 18.8736 14.3979C19.1872 14.1179 19.4007 13.7611 19.4872 13.3728C19.5738 12.9844 19.5294 12.5818 19.3596 12.216C19.1899 11.8502 18.9025 11.5375 18.5338 11.3175C18.1651 11.0975 17.7316 10.9801 17.2881 10.9801H0.0975342V9.64533H17.2881C18.2792 9.64533 19.2298 9.99689 19.9306 10.6227C20.6314 11.2484 21.0252 12.0972 21.0252 12.9822C21.0252 13.8672 20.6314 14.7159 19.9306 15.3417C19.2298 15.9675 18.2792 16.319 17.2881 16.319ZM14.2984 7.64322H3.0872V6.30848H14.2984C14.7419 6.30848 15.1754 6.19105 15.5441 5.97106C15.9129 5.75106 16.2003 5.43838 16.37 5.07254C16.5397 4.7067 16.5841 4.30414 16.4976 3.91577C16.4111 3.5274 16.1975 3.17066 15.8839 2.89066C15.5703 2.61066 15.1708 2.41998 14.7359 2.34272C14.3009 2.26547 13.8501 2.30512 13.4404 2.45666C13.0306 2.60819 12.6804 2.86481 12.4341 3.19405C12.1877 3.5233 12.0562 3.91039 12.0562 4.30637H10.5613C10.5613 3.6464 10.7805 3.00125 11.1912 2.45251C11.6018 1.90377 12.1854 1.47608 12.8683 1.22352C13.5512 0.970959 14.3026 0.904878 15.0275 1.03363C15.7524 1.16238 16.4183 1.48019 16.9409 1.94686C17.4636 2.41352 17.8195 3.00809 17.9637 3.65538C18.1079 4.30266 18.0339 4.97359 17.751 5.58332C17.4682 6.19305 16.9892 6.7142 16.3746 7.08085C15.7601 7.44751 15.0375 7.64322 14.2984 7.64322Z" fill="#F7F7F7"/>
                        </svg>                              
                        <svg className="stone__feauter" width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.464844 16.906V15.0821C0.464844 15.0821 5.55142 13.2581 10.638 13.2581C15.7246 13.2581 20.8111 15.0821 20.8111 15.0821V16.906H0.464844ZM9.92587 5.14161C8.7051 1.58493 2.49947 2.4057 2.49947 2.4057C2.49947 2.4057 2.70294 9.51907 8.50163 8.4247C8.09471 5.77999 6.56873 5.05041 6.56873 5.05041C9.41722 5.05041 9.62068 8.15111 9.62068 8.15111V12.3462H11.6553V8.5159C11.6553 8.5159 11.6553 4.95922 14.7073 4.04725C14.7073 4.04725 12.6726 6.78316 12.6726 8.6071C19.7938 9.24547 19.7938 0.490566 19.7938 0.490566C19.7938 0.490566 10.7397 -0.421403 9.92587 5.14161Z" fill="#F7F7F7"/>
                        </svg>                            
                    </div>
                </div>
                <svg className="stone__down" width="75" height="42" viewBox="0 0 75 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.003 40.5355C35.9557 42.4882 39.1215 42.4882 41.0741 40.5355L72.8939 8.71573C74.8465 6.76311 74.8465 3.59728 72.8939 1.64466C70.9413 -0.307961 67.7755 -0.307961 65.8228 1.64466L37.5386 29.9289L9.2543 1.64466C7.30168 -0.307961 4.13586 -0.307961 2.18324 1.64466C0.230614 3.59728 0.230614 6.76311 2.18324 8.71573L34.003 40.5355ZM32.5386 36V37H42.5386V36H32.5386Z" fill="white"/>
                </svg>            
            </header>
                <h1 className='stone__title' style={{margin: 50, textAlign: 'center'}}>Хиты продаж</h1>
                <Swiper
                    slidesPerView={slides}
                    spaceBetween={40}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    centerInsufficientSlides={true}
                    loop
                    style={{
                        margin: "0px"
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {arraySF?.slice(0, 10).map((item, index) =>
                        <SwiperSlide>
                            <div className="stone-gap" key={index}>
                                <h2 className="stone-gap__title" >{item.name}</h2>
                                <table className="stone-gap__table">
                                    <tr className="stone-gap__row">
                                        <td className="stone-gap__d">Размеры:</td>
                                        <td className="stone-gap__d">{item.size} cm</td>
                                    </tr>
                                    <tr className="stone-gap__row">
                                        <td className="stone-gap__d">Толщина:</td>
                                        <td className="stone-gap__d">{item.thick} cm</td>
                                    </tr>
                                    <tr className="stone-gap__row">
                                        <td className="stone-gap__d">Производитель:</td>
                                        <td className="stone-gap__d">{item.producer}</td>
                                    </tr>
                                </table>
                                <img className="stone-gap__image" src={item.img} onClick={() => navigate(`/items/${items.findIndex(card => card._id === item._id)}`)}/>
                                <a className="stone-gap__buy" href='https://api.whatsapp.com/send?phone=77715631208'><span className="buy">Заказать</span></a>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            <section className='stone__form'>
                <input className="stone__form-input" type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Поиск"/>
            </section>
            <section className="stone__gaps">
                {arraySF ? arraySF?.map((item, index) =>
                    <div className="stone-gap" key={index}>
                        <h2 className="stone-gap__title" >{item.name}</h2>
                        <table className="stone-gap__table">
                            <tr className="stone-gap__row">
                                <td className="stone-gap__d">Размеры:</td>
                                <td className="stone-gap__d">{item.size} cm</td>
                            </tr>
                            <tr className="stone-gap__row">
                                <td className="stone-gap__d">Толщина:</td>
                                <td className="stone-gap__d">{item.thick} cm</td>
                            </tr>
                            <tr className="stone-gap__row">
                                <td className="stone-gap__d">Производитель:</td>
                                <td className="stone-gap__d">{item.producer}</td>
                            </tr>
                        </table>
                        <img className="stone-gap__image" src={item.img} onClick={() => navigate(`/items/${items.findIndex(card => card._id === item._id)}`)}/>
                        <a className="stone-gap__buy" href='https://api.whatsapp.com/send?phone=77715631208'><span className="buy">Заказать</span></a>
                    </div>
                ) : <ClipLoader color="gray" size={50} speedMultiplier={0.5} cssOverride={{margin: 20}}/>}
            </section>
        </div>
    )
};