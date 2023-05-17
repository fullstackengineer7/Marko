import { InputSwitch } from 'primereact/inputswitch';
import { useState } from 'react';

const Chart = () => {

	const [handle, setHandle] = useState(false);

	return (
		<div className="client-analytics-chart">
			<div className="flex flex-row flex-wrap justify-content-between toolbar">
				<div className="flex flex-row left-btns gap-2">
					<div className="flex align-items-center justify-content-between btn">Total users</div>
					<div className="flex align-items-center justify-content-between btn">Quests passed</div>
					<div className="flex align-items-center justify-content-between btn">New users</div>
				</div>
				<div className="flex flex-row right-btns gap-2">
					<div className="flex flex-row align-items-center swictch-btn">
						<span className="date-label">Show all requests</span>
						<InputSwitch checked={handle} onChange={(e) => setHandle(e.value)} />
					</div>
					<div className="flex align-items-center justify-content-between btn">1 m</div>
					<div className="flex align-items-center justify-content-between btn">3 m</div>
					<div className="flex align-items-center justify-content-between btn">6 m</div>
					<div className="flex align-items-center justify-content-between btn">1 y</div>
				</div>
			</div>
			<div className="chart"></div>
		</div>
	)
}

export default Chart;