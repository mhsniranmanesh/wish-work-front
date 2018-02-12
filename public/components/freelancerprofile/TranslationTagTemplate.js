import React from 'react';
import PropTypes from 'prop-types';

const TranslationTagTemplate = (props) => {
  var id = props.x;
  return(
      <div className="tags" >
          <li className='addedTag'>
              { ' ' +props.fromLanguage + ' ' +'به' + ' ' + props.toLanguage}
          </li>
      </div>

  )
};

// TranslationTagTemplate.PropTypes = {
//     deleteSkills: PropTypes.func.isRequired
// };

export default TranslationTagTemplate;