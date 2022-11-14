import Error from './Error';

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
			<form className='Form' action=''>
				<input
					className='InputField'
					type='text'
					name='city'
					placeholder='Search by city'
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
					/>
				<div
					className='SubmitButton'
					name='submit-button'
					onClick={() => { handleSubmission(city) }}
				>
					Search
				</div>
				{error ? <Error error={error} /> : null}
			</form>
		</div>
	);
}
