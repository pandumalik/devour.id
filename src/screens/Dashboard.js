import React from 'react';
import {Link} from 'react-scroll'
import down_arrow from '../assets/icons/down-arrow.png'

const Dashboard = () => {
    return (
        <div className="main-container">
            <div className="left-container">
                <div className="left-header-title">
                    devour.id
                </div>
                <div className="left-slogan">
                    Your digital needs
                    \n
                    partner
                </div>
                <div className="left-scroller">
                    <div className="scroll-text">
                        scroll to explore
                    </div>
                    <div className="icon-container">
                        <img className="scroll-icon" src={down_arrow} alt=""/>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <Link activeClass="active"
                      to="dashboard"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      delay={100}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                >Home
                </Link>
                <Link activeClass="active"
                      to="dashboard"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      delay={100}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                >About
                </Link>
                <Link activeClass="active"
                      to="dashboard"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      delay={100}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                >Project
                </Link>
                <Link activeClass="active"
                      to="dashboard"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      delay={100}
                      isDynamic={true}
                      ignoreCancelEvents={false}
                >Contact
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;
