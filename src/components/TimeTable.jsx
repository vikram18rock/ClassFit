export default function TimeTable ({slots, days, timings, no, table, handleCell}) {
    return (
        <div className={"elem table"}>
            <table>
                <TableHeading timings={timings} no={no}/>
                <TableBody days={days} timings={timings} no={no} table={table}/>
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

function TableBody ({days, timings, no, table}) {
	const bdy = [];
	
	for (let i = 0; i < table.length; i++) {
		const row = [
			<th className="cell">{ days[i] }</th>, 
		];

		for (let j = 0; j < table[0].length; j++) {
			row.push(
				<td className="cell">{ table[i][j] }</td>
			);
		}

		bdy.push(
			<tr>
				{row}
			</tr>
		);
	}
	console.log(bdy);

    return (
        <tbody>
            {bdy}
        </tbody>
    );
}