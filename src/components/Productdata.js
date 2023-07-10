import React, { useState } from 'react';



var stylingObject = {
    container: {
        display: "flex",
        height: "100vh",
        alignItems: 'center',
        position: 'relative',
    },
    divleft: {
        width: "50%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    divright: {
        width: "50%",
    }, imgleft: {
        maxWidth: '100%',
        maxHeight: '100%',
        padding: "10px"
    }, coloroption: {
        width: '100px',
        padding: '20px ',
    }, time: {
        color: "white",
        position: "absolute",
        left: "20%",
        fontSize: "2em",
        fontWeight: "bold",
        // display: "none"
    }
    , hrate: {
        color: "white",
        position: "absolute",
        left: "22%",
        top:"38%"
    }, watchimg: {
        width: "100%",
        maxWidth: "100px",
        display: "flex",
        // border: "2px solid red"
    },
    featurebtn: {
        marginRight: "5px",
    },buybtn: {
        marginTop:"30px",
        fontWeight:"bold",
    }
}

const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time ", "Heart Rate "
    ]
};

Object.freeze(ProductData);

function Productdata() {
    const [selectedColor, setSelectedColor] = useState(0);
    const clkbtn = (o, i) => {
        setSelectedColor(o);
        console.log(i);
        console.log(o);
    }
    const [istimeset, setIstimeset] = useState(1)
    const toggleTime = () => {
        setIstimeset(1);
        // stylingObject.time.display="visible"
    }
    const togglerate = () => {
        setIstimeset(null);
    }
    return (

        <>
            <div style={stylingObject.container}>
                {istimeset && <p style={stylingObject.time}>10:30:25</p>}
                {!istimeset && <p style={stylingObject.hrate}><i class="fa fa-heartbeat fa-4x" aria-hidden="true"><div style={{fontSize:"0.5em",margin:"15px"}}>87</div></i></p>}


                <div style={stylingObject.divleft}>

                    <img src={selectedColor !== null ? selectedColor.imageUrl || 'https://imgur.com/iOeUBV7.png' : {}} alt={selectedColor.styleName} style={stylingObject.imgleft} />
                </div>


                <div style={stylingObject.divright} >
                    <h2 style={{ fontWeight: "bold" }}>{ProductData.title}</h2>
                    <div>
                        <p>{ProductData.description}</p>
                    </div>

                    <h3>Color Options</h3>
                    <div style={stylingObject.watchimg}>
                        {ProductData.colorOptions.map((option, index) => (
                            <span key={index}>

                                <button type="button" className="btn" onClick={() => clkbtn(option, index)
                                } style={{ ...stylingObject.coloroption, border: selectedColor === option ? '2px solid green' : '2px solid transparent' }} >
                                    <img
                                        key={index}
                                        src={option.imageUrl}
                                        alt={option.styleName}
                                        style={stylingObject.coloroption}

                                    />
                                </button>
                            </span>

                        ))}
                    </div>

                    <h3>Features</h3>

                    <div>

                        <button type="button" className="btn btn-secondary featurebtn" style={stylingObject.featurebtn} onClick={() => toggleTime()}>  Time  </button>

                        <button type="button" className="btn btn-secondary featurebtn" style={stylingObject.featurebtn} onClick={() => togglerate()}>  Heart Rate  </button>
                    </div>

                    <button type="button" class="btn btn-success " style={stylingObject.buybtn}>Buy now</button>



                </div>
            </div>

        </>
    );
}

export default Productdata;
