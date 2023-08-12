import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        // As on alert the layout was shifting as called cummalative layout shift , so address this we defined a height of 40px to the area thus no shift is happenning now due to this below line
        <div style={{height:"50px"}}>
        {/* expression1 && expression2 The statement below means it evaluates first expression if it is true then second expression is returned or envoked  */}
        {props.alert &&    <div class={`alert alert-${props.alert.msgType} alert-dismissible fade show`} role="alert" >
                <strong>{capitalize(props.alert.msgType)}</strong>{props.alert.msg}
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                {/* This line above gives user the method to dismiss the alert */}
                
            </div>}
        </div>
    )
}

export default Alert