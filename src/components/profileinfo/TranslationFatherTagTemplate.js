import React from 'react';

const TranslationFatherTagTemplate = (props) => {


    return(
        <div className="tags" >
            <li className='addedTag'>
                <i className='fa fa-times-circle' aria-hidden={true}/>{ ' ' +'ترجمه ی'+ ' ' + props.fatherTag}
            </li>
        </div>

    )
};

export default TranslationFatherTagTemplate;