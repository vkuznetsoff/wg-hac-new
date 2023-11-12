import { useClock } from 'react-use-clock'

const Clock = () => {
	const clock = useClock()

	return (
		<div>
			Time is:{' '}
			<strong>
				{clock.hours.toString().padStart(2, '0')}:
				{clock.minutes.toString().padStart(2, '0')}:
				{clock.seconds.toString().padStart(2, '0')}
			</strong>
			<div
				style={{
					'--hours': `${clock.hours}`,
					'--minutes': `${clock.minutes}`,
					'--seconds': `${clock.seconds}`,
				}}
			/>
		</div>
	)
}

export default Clock