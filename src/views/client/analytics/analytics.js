import Sum from '../../../components/client/analytics/sum';
import Chart from '../../../components/client/analytics/chart';

const Analytics = () => {
	return (
		<div>
			<div className="flex flex-row justify-content-between gap-3">
				<Sum  className="flex-grow-1 " title={"Total quests passed"} count={"1.8k"} percentage={7.4} />
				<Sum  className="flex-grow-1 " title={"Quests organized"} count={"1.8k"} percentage={7.4} />
				<Sum  className="flex-grow-1 " title={"Total quests passed"} count={"1.8k"} percentage={7.4} />
			</div>
			<Chart/>
		</div>
	)
}

export default Analytics;
