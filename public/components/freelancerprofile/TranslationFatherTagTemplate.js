import React from 'react';

const TranslationFatherTagTemplate = (props) => {


    return(
        <div className="tags" >
            <li className='addedTag'>
                { ' ' +'ترجمه ی'+ ' ' + props.fatherTag}
            </li>
        </div>

    )
};

export default TranslationFatherTagTemplate;