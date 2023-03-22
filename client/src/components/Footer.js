import React from 'react';
import logo from '../img/logo.png';

export const Footer = () => {
    return (
        <footer className="stone__footer">
            <img className="stone__logo" src={logo} alt="logo"/>
            <ul className="footer-social-list">
                <li className="footer-social-item">
                    <a className="footer-social-link" href="https://api.whatsapp.com/send?phone=77715631208">
                        <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.05 5.67398C18.1332 4.7479 17.0412 4.01364 15.8376 3.51403C14.6341 3.01441 13.3431 2.75944 12.04 2.76398C6.58 2.76398 2.13 7.21397 2.13 12.674C2.13 14.424 2.59 16.124 3.45 17.624L2.05 22.764L7.3 21.384C8.75 22.174 10.38 22.594 12.04 22.594C17.5 22.594 21.95 18.144 21.95 12.684C21.95 10.034 20.92 7.54398 19.05 5.67398ZM12.04 20.914C10.56 20.914 9.11 20.514 7.84 19.764L7.54 19.584L4.42 20.404L5.25 17.364L5.05 17.054C4.22775 15.7409 3.79114 14.2232 3.79 12.674C3.79 8.13398 7.49 4.43398 12.03 4.43398C14.23 4.43398 16.3 5.29398 17.85 6.85398C18.6175 7.61794 19.2257 8.52664 19.6394 9.5274C20.0531 10.5282 20.264 11.6011 20.26 12.684C20.28 17.224 16.58 20.914 12.04 20.914ZM16.56 14.754C16.31 14.634 15.09 14.034 14.87 13.944C14.64 13.864 14.48 13.824 14.31 14.064C14.14 14.314 13.67 14.874 13.53 15.034C13.39 15.204 13.24 15.224 12.99 15.094C12.74 14.974 11.94 14.704 11 13.864C10.26 13.204 9.77 12.394 9.62 12.144C9.48 11.894 9.6 11.764 9.73 11.634C9.84 11.524 9.98 11.344 10.1 11.204C10.22 11.064 10.27 10.954 10.35 10.794C10.43 10.624 10.39 10.484 10.33 10.364C10.27 10.244 9.77 9.02398 9.57 8.52398C9.37 8.04398 9.16 8.10398 9.01 8.09398H8.53C8.36 8.09398 8.1 8.15398 7.87 8.40398C7.65 8.65398 7.01 9.25398 7.01 10.474C7.01 11.694 7.9 12.874 8.02 13.034C8.14 13.204 9.77 15.704 12.25 16.774C12.84 17.034 13.3 17.184 13.66 17.294C14.25 17.484 14.79 17.454 15.22 17.394C15.7 17.324 16.69 16.794 16.89 16.214C17.1 15.634 17.1 15.144 17.03 15.034C16.96 14.924 16.81 14.874 16.56 14.754Z" fill="black"/>
                        </svg>                        
                    </a>
                </li>
                <li className="footer-social-item">
                    <a className="footer-social-link" href="https://instagram.com/kaz_elite_stroi?igshid=YmMyMTA2M2Y=">
                        <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.8 2.76392H16.2C19.4 2.76392 22 5.36392 22 8.56392V16.9639C22 18.5022 21.3889 19.9774 20.3012 21.0651C19.2135 22.1528 17.7383 22.7639 16.2 22.7639H7.8C4.6 22.7639 2 20.1639 2 16.9639V8.56392C2 7.02566 2.61107 5.55041 3.69878 4.4627C4.78649 3.37499 6.26174 2.76392 7.8 2.76392ZM7.6 4.76392C6.64522 4.76392 5.72955 5.1432 5.05442 5.81833C4.37928 6.49346 4 7.40914 4 8.36392V17.1639C4 19.1539 5.61 20.7639 7.6 20.7639H16.4C17.3548 20.7639 18.2705 20.3846 18.9456 19.7095C19.6207 19.0344 20 18.1187 20 17.1639V8.36392C20 6.37392 18.39 4.76392 16.4 4.76392H7.6ZM17.25 6.26392C17.5815 6.26392 17.8995 6.39561 18.1339 6.63003C18.3683 6.86445 18.5 7.1824 18.5 7.51392C18.5 7.84544 18.3683 8.16338 18.1339 8.3978C17.8995 8.63222 17.5815 8.76392 17.25 8.76392C16.9185 8.76392 16.6005 8.63222 16.3661 8.3978C16.1317 8.16338 16 7.84544 16 7.51392C16 7.1824 16.1317 6.86445 16.3661 6.63003C16.6005 6.39561 16.9185 6.26392 17.25 6.26392ZM12 7.76392C13.3261 7.76392 14.5979 8.2907 15.5355 9.22838C16.4732 10.1661 17 11.4378 17 12.7639C17 14.09 16.4732 15.3618 15.5355 16.2994C14.5979 17.2371 13.3261 17.7639 12 17.7639C10.6739 17.7639 9.40215 17.2371 8.46447 16.2994C7.52678 15.3618 7 14.09 7 12.7639C7 11.4378 7.52678 10.1661 8.46447 9.22838C9.40215 8.2907 10.6739 7.76392 12 7.76392ZM12 9.76392C11.2044 9.76392 10.4413 10.08 9.87868 10.6426C9.31607 11.2052 9 11.9683 9 12.7639C9 13.5596 9.31607 14.3226 9.87868 14.8852C10.4413 15.4478 11.2044 15.7639 12 15.7639C12.7956 15.7639 13.5587 15.4478 14.1213 14.8852C14.6839 14.3226 15 13.5596 15 12.7639C15 11.9683 14.6839 11.2052 14.1213 10.6426C13.5587 10.08 12.7956 9.76392 12 9.76392Z" fill="black"/>
                        </svg>                                 
                    </a>
                </li>
                <li className="footer-social-item">
                    <a className="footer-social-link" href="https://t.me/bakythaman">
                        <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.76392C6.48 2.76392 2 7.24392 2 12.7639C2 18.2839 6.48 22.7639 12 22.7639C17.52 22.7639 22 18.2839 22 12.7639C22 7.24392 17.52 2.76392 12 2.76392ZM16.64 9.56392C16.49 11.1439 15.84 14.9839 15.51 16.7539C15.37 17.5039 15.09 17.7539 14.83 17.7839C14.25 17.8339 13.81 17.4039 13.25 17.0339C12.37 16.4539 11.87 16.0939 11.02 15.5339C10.03 14.8839 10.67 14.5239 11.24 13.9439C11.39 13.7939 13.95 11.4639 14 11.2539C14.0069 11.2221 14.006 11.1891 13.9973 11.1577C13.9886 11.1264 13.9724 11.0976 13.95 11.0739C13.89 11.0239 13.81 11.0439 13.74 11.0539C13.65 11.0739 12.25 12.0039 9.52 13.8439C9.12 14.1139 8.76 14.2539 8.44 14.2439C8.08 14.2339 7.4 14.0439 6.89 13.8739C6.26 13.6739 5.77 13.5639 5.81 13.2139C5.83 13.0339 6.08 12.8539 6.55 12.6639C9.47 11.3939 11.41 10.5539 12.38 10.1539C15.16 8.99392 15.73 8.79392 16.11 8.79392C16.19 8.79392 16.38 8.81392 16.5 8.91392C16.6 8.99392 16.63 9.10392 16.64 9.18392C16.63 9.24392 16.65 9.42392 16.64 9.56392Z" fill="black"/>
                        </svg>                                   
                    </a>
                </li>
            </ul>
        </footer>
    )
}