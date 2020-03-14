import React from 'react';

class Modal extends React.Component{

    componentDidMount(){
        if (document.cookie.split(';').filter((item) => item.includes('cvModal=hidden')).length) {
            this.removeModal();     
        }
    }
    handleClick = () =>{
        this.removeModal();
        this.setCookie();

    }

    removeModal = () =>{
        const elem = document.querySelector('.modal-bg');
        elem.parentNode.removeChild(elem);
    }
    
    setCookie = () => {
        let d = new Date();
        d.setTime(d.getTime() + (3600000*24*14));
        document.cookie = `cvModal=hidden; expires=${d}; path=/`;
    };

    render(){
        return(
            <div className="modal-bg" onClick={this.handleClick}>
                <div className="component--modal">
                    <h2>Are you freaking yourself by constantly checking the latest coronavirus headlines? </h2>
                    <p>Good news! You've found an application <span>scientifically designed*</span> to make coronavirus news updates seem less scary.</p>
                    <p className="miceType">*Not scientifically designed.</p>
                    <button id="proceed">See the latest headlines</button>
                </div>
            </div>
        )
    }
}

export default Modal;