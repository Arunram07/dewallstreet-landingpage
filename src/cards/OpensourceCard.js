import React from 'react';
import '../style/card.scss'

const OpensourceCard = ({percent, data, image}) => {
    return (
        <div className="opensourceCard">
            {image && <img src={image} alt="blockchain" className="mb-20"/>}
            <p className="mb-20 text_dark_16">{percent}</p>
            <p className="text_secondaryDark_14">{data}</p>
        </div>
    );
};

export default OpensourceCard;