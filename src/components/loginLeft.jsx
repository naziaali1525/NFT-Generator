import React from 'react';


class LeftBorder extends React.Component {
    render() { 
        return (
            <>
            <div className="border">
                <div className="logo"></div>
                {/* <img src="./components/images/Group 872.png" alt="" width='70px' height='20px'/> */}
                <h3 className='tag-line'>A few steps away from Creating your NFT!</h3>
                <p className='para'>No code, No fuss! <br />A few clicks is all you need.</p>
                <div className="image"></div>
                {/* <img src="./images/Group-951.png" alt="" width='220px' height='200px'/> */}

                <p className='art-by'>Art by <br /> <b>Alan Walker</b></p>
            
            </div>
            </>
        );
    }
}
 
export default LeftBorder;