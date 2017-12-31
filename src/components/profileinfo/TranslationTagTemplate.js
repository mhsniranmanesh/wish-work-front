import React from 'react';

const TranslationTagTemplate = (props) => {


  return(
      <div className="tags" >
          <li className='addedTag'>
              <i className='fa fa-times-circle' aria-hidden={true}/>{ ' ' +props.fromLanguage + ' ' +'به' + ' ' + props.toLanguage}
          </li>
      </div>

  )
};

export default TranslationTagTemplate;