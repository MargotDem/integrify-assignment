export default function RequestError ({ error }) {
	//console.log("this is the error message");
	//console.log(error);
	return (
		<div className='Error'>
			{error}
		</div>
	);
}
