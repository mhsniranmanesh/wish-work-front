import React from 'react';
import PropTypes from 'prop-types';

const TagsRow = ({Tag}) =>{
    return(
        <div>
            <a className="tag" href="#">{Tag}</a>
        </div>
    )
};

TagsRow.PropTypes = {
    Tag : PropTypes.object.isRequired
};

export default TagsRow ;