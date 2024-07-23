export default function TimeTable ({slots, days, timings, no}) {

    return (
        <div className={"elem table"}>
            <table>
                <TableHeading timings={timings} no={no}/>
                <TableBody days={days} timings={timings} no={no}/>
            </table>
        </div>
    );
}

function TableHeading ({timings, no}) {
    return (
        <thead>
            <th className="cell">Day</th>
            {timings[no].map((time, index) => <th className="cell" key={index}>{time}</th>)}
        </thead>
    );
}

function TableBody ({days, timings, no}) {
    return (
        <tbody>
            {days.map((day, index) => <tr key={index}>
                <td className="cell">{day}</td>
                {timings[no].map((time, index) => <td className="cell" key={index}> {0} </td>)}
            </tr>)}
        </tbody>
    );
}