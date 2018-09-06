import React, { PureComponent } from 'react'
import './header.css'

export default class Header extends PureComponent{
    state = {
        menuOpen: false
    };
    render(){
        const menu = this.state.menuOpen && <div id={'logOut'}>Log Out</div>;
        const arrow = this.state.menuOpen !== true? <i className="fas fa-arrow-down" onClick={this.handleClick}/> :
                                                    <i className="fas fa-arrow-down open" onClick={this.handleClick}/>;
        return(
            <header>
                <div id={'headerLeft'}>
                    <i className="fab fa-angrycreative"/>
                    <span>City</span>
                    <span>FALCON</span>
                </div>
                <div id={'headerRight'} >
                    <img src="./Arman.jpg" alt=""/>
                    <div onClick={this.handleClick} >Arman Grigoryan</div>
                    <div id={'userName'}>{menu}</div>
                    {arrow}
                </div>
            </header>
        )
    }
    handleClick = () => {
        this.setState({
          menuOpen: !this.state.menuOpen
        });
    };

}

