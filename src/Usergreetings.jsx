import React from "react";
import propTypes from "prop-types";

function Usergreetings(props){

 return(props.istrue ? <h1 className="w">welcome:{props.User}</h1>
                        :<h1 className="p">Please sign in</h1>);


}

Usergreetings.propTypes={


    istrue:propTypes.bool,
    User:propTypes.string

}
Usergreetings.defaultProps={
    istrue:false,
   User:"guest",
}
 

export default Usergreetings; 