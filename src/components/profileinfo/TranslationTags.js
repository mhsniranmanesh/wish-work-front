import React from 'react';
import PropTypes from 'prop-types';
import STATIC_DATAS from '../../Datas/STATIC_DATAS';
import TranslationTagTemplate from './TranslationTagTemplate';
import TranslationFatherTagTemplate from './TranslationFatherTagTemplate';
const TranslationTags = (props) =>{
    var fatherTag = [];
    var skills =[];
    //console.log(props.Skills , 'props.Skills');
    //console.log('props.Skills[0].translation_skill.languages[0]' , props.Skills[0].translation_skill.languages[0]);
    if(props.Skills[0].translation_skill) {
        for (var x = 0; x < props.Skills[0].translation_skill.language_set.length; x++) {
            console.log(props.Skills[0].translation_skill.language_set.length);
            for (var y = 1; y < 7; y++) {
                if(props.Skills[0].translation_skill.language_set[x]) {
                    if (STATIC_DATAS.AVAILABLEFROMLANGUAGES[y - 1].index == props.Skills[0].translation_skill.language_set[x].from_language) {
                        for (var z = 1; z < 7; z++) {
                            if (STATIC_DATAS.AVAILABLETOLANGUAGES[z - 1].index == props.Skills[0].translation_skill.language_set[x].to_language) {
                                skills.push(<TranslationTagTemplate
                                    deleteSkills={props.deleteSkills}
                                    fromLanguage={STATIC_DATAS.AVAILABLEFROMLANGUAGES[y - 1].name}
                                    toLanguage={STATIC_DATAS.AVAILABLETOLANGUAGES[z - 1].name}
                                    key={(y * 10) + z + (x * 100)} x={x}/>);
                            }
                        }
                    }
                }
            }
        }
        if (props.Skills[0].translation_skill.is_general) {
            fatherTag.push(<TranslationFatherTagTemplate key={1} deleteFatherTag={props.deleteFatherTag} id={1} fatherTag={'عمومی'}/>)
        }
        if (props.Skills[0].translation_skill.is_medical) {
            fatherTag.push(<TranslationFatherTagTemplate key={2} deleteFatherTag={props.deleteFatherTag} id={2} fatherTag={'پزشکی'}/>)
        }
        if (props.Skills[0].translation_skill.is_technical) {
            fatherTag.push(<TranslationFatherTagTemplate key={3} deleteFatherTag={props.deleteFatherTag} id={3} fatherTag={'فنی'}/>)
        }
        if (props.Skills[0].translation_skill.is_legal) {
            fatherTag.push(<TranslationFatherTagTemplate key={4} deleteFatherTag={props.deleteFatherTag} id={4} fatherTag={'حقوقی'}/>);
        }
    }

  return(
      <div>
          {skills} {fatherTag}
      </div>
  )
};
TranslationTags.PropTypes ={
    translation_skill : PropTypes.object.isRequired,
    Skills : PropTypes.object.isRequired,
    languages : PropTypes.object.isRequired,
    deleteSkills : PropTypes.func.isRequired
};

export default TranslationTags;