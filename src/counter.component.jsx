import React from 'react';

export default function CounterComponent(props) {
    const [counter, setCounter] = React.useState(0);

    // let counter = 0;
    const incrementar = () => {
        // counter++;
        setCounter(counter + 1);
        console.log("Incrementar", counter);
    };

    const decrementar = () => {
        // counter--;
        setCounter(counter - 1);
        console.log("Decrementar", counter);
    };

	return (
		<div>
			<h1>{props.title}</h1>
            <p>{counter}</p>
            <button onClick={incrementar}>Incrementar</button>
            <br />
            <button onClick={decrementar}>Decrementar</button>
		</div>
	);
}
