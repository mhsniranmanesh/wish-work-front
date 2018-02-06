import React from 'react';
import PropTypes from 'prop-types';

const TranslationTagTemplate = (props) => {
  var id = props.x;
  return(
      <div className="tags" >
          <li className='addedTag'>
              <i className='fa fa-times-circle'
                 aria-hidden={true}
                 onClick={(event)=>{props.deleteSkills(id);}}
              />{ ' ' +props.fromLanguage + ' ' +'به' + ' ' + props.toLanguage}
          </li>
      </div>

  )
};

// TranslationTagTemplate.PropTypes = {
//     deleteSkills: PropTypes.func.isRequired
// };

export default TranslationTagTemplate;