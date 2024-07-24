import { useState } from "react";

export default function Course (props) {

    const [course, setCourse] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        props.onInput(course);
        setCourse('');
    }

    return (
        <div className={"elem course"} style={{textAlign: 'center'}}>
            <form onSubmit={handleSubmit}>

                <label >
                    {'Choose your Batch: '}
                    <select 
                        value={props.no}
                        onChange={(e) => props.setNo(e.target.value)}
                    >
                        <option value={1}>Morning</option>
                        <option value={2}>AfterNoon</option>
                    </select>
                </label>

                <br />

                <label>
                    Course Entry:
                    <input type="text" placeholder={'Enter Course Name'} onChange={(e) => setCourse(e.target.value)} value={course}/>
                </label>

                <br />

                <label>
                    {'Choose your Slot: '}
                    <select>
                        <Options 
                            slots={props.slots}
                            no={props.no}
                        />
                    </select>
                </label>

                <br />
                
                <input type="submit"/>
            </form>
        </div>
    );
}

function Options ({slots, no}) {
    let list = [];
    
    // batch slots
    for (let i = 0; i < slots.batchSlots.length; i++) {
        list.push(
            <option value={slots.batchSlots[i]}>{slots.batchSlots[i] + no}</option>
        );
    }
    
    // common slots
    for (let i = 0; i < slots.commonSlots.length; i++) {
        list.push(
            <option value={slots.commonSlots[i]}>{slots.commonSlots[i]}</option>
        );
    }

    return (
        <>
            {list}
        </>
    );
}