import { useState } from "react";

const Container = ({ setCounter }) => {
    return (
        <div>
            <AddOneButton setCounter={setCounter} />
        </div>)
}

const AddOneButton = ({ setCounter }) => {
    return (<div>
        <button onClick={(() => { setCounter((v) => v + 1) })}>Add One</button>
    </div>)
};

const Counter = ({ counter }) => {
    return <div>Counter: {counter} </div>
}


const CounterUseState = () => {
    const [counter, setCounter] = useState(0);
    return (<div>
        <Container />
        <Counter counter={counter} />
    </div>
    )
};

export default CounterUseState;