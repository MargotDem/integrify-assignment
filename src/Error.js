export default function RequestError ({ error }) {
	console.log("this is the message WTF");
	console.log(error);
	return (
		<div>{error}</div>
	);
}
