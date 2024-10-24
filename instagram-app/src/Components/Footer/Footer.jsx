import React from "react";
import './footer.css';
import home from '../../img/Home.svg';
import search from '../../img/Search.svg';
import reels from '../../img/Reels.svg';
import bmw from '../../img/bmw.jpg';
import addIcon from '../../img/AddIcon.svg';

function Footer(){
    
    return(
        <footer>
            <div class="foot-block">
                <img class="home" src={home} alt="" />
                <img class="search" src={search} alt="" />
                <img class="shop" src={addIcon} alt="" />
                <img class="reels" src={reels} alt="" />
                <img class="footAvatar" src={bmw} alt="" />
            </div>
        </footer>
    )
}

export default Footer;