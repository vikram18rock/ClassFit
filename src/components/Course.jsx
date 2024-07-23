import { useState } from "react";

export default function Course ({course, onInput}) {
    return (
        <div className={"elem course"} style={{textAlign: 'center'}}>
            <form>
                <label>
                <p>Course Entry</p> 
                <input type="text" placeholder={'Enter Course Name'} onChange={(e) => onInput(e.target.value)} value={course}/>
                </label>
                <br />
                <input type="submit"/>
            </form>
        </div>
    );
}