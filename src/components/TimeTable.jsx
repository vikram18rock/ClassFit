export default function TimeTable ({days, timings, no, table, handleCell, course}) {
 
	 // Slot system
    const slots = {
        'commonSlots' : ['f', 'g', 'h'],
        'batchSlots' : ['a', 'b', 'c', 'd', 'e', 't']
    };

	
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
			<tr>
				<th className="cell" scope="col">Day</th>
				{timings[no].map((time, index) => <th className="cell" key={index}>{time}</th>)}
			</tr>
        </thead>
    );
}

function TableBody ({days, table}) {
	const bdy = [];
	
	for (let i = 0; i < table.length; i++) {
		const row = [
			<th className="cell" scope="row" key={-1}>{ days[i] }</th>, 
		];

		for (let j = 0; j < table[0].length; j++) {
			row.push(
				<td className="cell" key={j}>{ table[i][j] }</td>
			);
		}

		bdy.push(
			<tr key={i}>
				{row}
			</tr>
		);
	}

    return (
        <tbody>
            {bdy}
        </tbody>
    );
}