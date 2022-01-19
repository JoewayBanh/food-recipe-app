import React from 'react';
import './StyleCard.scss';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaMapMarkerAlt }from "react-icons/fa";

function Card() {
    return (
        <div className="card text-center">
            <div class="background"></div>


            <div class="outer-div">
                
                <div class="inner-div">
                    <div class="front">
                        <div class="front__bkg-photo1" ></div>
                        <div class="front__face-photo"></div>
                        <div class="front__text">
                            <h3 class="front__text-header">Joeway Bravo</h3>
                            <p class="front__text-para"><FaMapMarkerAlt/>Amsterdam</p>
                            <span class="front__text-hover">Check my skills</span>

                            
                        </div>
                    </div>
                    <div class="back">
                        <div class="social-media-wrapper">
                            <a href="#" class="social-icon"><FaCodepen/></a>
                            <a href="#" class="social-icon"><FaGithub/></a>
                            <a href="#" class="social-icon"><FaLinkedin/></a>
                            <a href="#" class="social-icon"><FaFacebookSquare/></a>
                        </div>
                    </div>

                </div>


                <div class="inner-div">
                    <div class="front">
                        <div class="front__bkg-photo2"></div>
                        <div class="front__face-photo"></div>
                        <div class="front__text">
                            <h3 class="front__text-header">Kaspars Bravo</h3>
                            <p class="front__text-para"><FaMapMarkerAlt/>Amsterdam</p>
                            <span class="front__text-hover">Check my skills</span>
                        </div>
                    </div>
                    <div class="back">
                        <div class="social-media-wrapper">
                            <a href="#" class="social-icon"><FaCodepen/></a>
                            <a href="#" class="social-icon"><FaGithub/></a>
                            <a href="#" class="social-icon"><FaLinkedin/></a>
                            <a href="#" class="social-icon"><FaFacebookSquare/></a>
                        </div>
                    </div>

                </div>

                <div class="inner-div">
                    <div class="front">
                        <div class="front__bkg-photo3"></div>
                        <div class="front__face-photo"></div>
                        <div class="front__text">
                            <h3 class="front__text-header">Martin Bravo</h3>
                            <p class="front__text-para"><FaMapMarkerAlt/>Amsterdam</p>
                            <span class="front__text-hover">Check my skills</span>
                        </div>
                    </div>
                    <div class="back">
                        <div class="social-media-wrapper">
                            <a href="#" class="social-icon"><FaCodepen/></a>
                            <a href="#" class="social-icon"><FaGithub/></a>
                            <a href="#" class="social-icon"><FaLinkedin/></a>
                            <a href="#" class="social-icon"><FaFacebookSquare/></a>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    );
}
export default Card