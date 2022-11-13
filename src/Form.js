import Error from './Error'

export default function Form ({
	handleInputChange,
	handleSubmission,
	handleKeyPress,
	city,
	error,
	test
}) {
	return (
		<div>
			<form className='form' action=''>
				<input
					type='text'
					name='city'
					placeholder='City'
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
					/>
				<div
					className='my-button'
					name='submit-button'
					onClick={() => { handleSubmission(city) }}
				>
					Search weather
				</div>
			</form>
			{error ? <Error error={error} /> : null}
		</div>
	);
}
