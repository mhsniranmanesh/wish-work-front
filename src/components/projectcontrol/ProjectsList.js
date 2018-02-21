import React from 'react' ;
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import ProjectTemplate from './ProjectTemplate';
import HelpForCP from './HelpForCP';

const ProjectsList = (props) => {
    var numberC = [];
    var numberF =[];
    var List = [];
    if(props.AsClientProject.length){
        for(var j=0 ; j < props.AsClientProject.length; j++){
            numberC[j] = j ;
            List.push(<ProjectTemplate key={j*10 + 100} AsClientProject={props.AsClientProject[j]} numberSee={j*2 + 1}
                                       activeProjectList={j*2 + 1}
                                       changeView={props.changeView}
                                       orgNumberSee={props.numberSee}
                                       orgActiveProjectList={2*j + 1}
                                       setIdForCanceling={props.setIdForCanceling}
            />)
        }
    }
    if(props.AsFreelancerProject.length){
        for (var i=0 ; i< props.AsFreelancerProject.length ; i++){
            numberF[i] = i ;
            List.push(<ProjectTemplate key={i} AsFreelancerProject={props.AsFreelancerProject[i]} numberSee={2*i}
                                       activeProjectList={2*i}
                                       changeView={props.changeView}
                                       orgNumberSee={props.numberSee}
                                       orgActiveProjectList={2*i}
            />)
        }
    }
    List.push(<HelpForCP/>);
    return(
    <ul className="contact-list">
        {List}
      </ul>
)
};
export default ProjectsList;
