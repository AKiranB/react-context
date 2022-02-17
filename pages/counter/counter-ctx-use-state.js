import { useState, createContext, useContext } from "react";

const Container = () => {
    const [, setCounter] = useContext(CounterContext)
    return (
        <div>
            <AddOneButton setCounter={setCounter} />
        </div>)
}

const CounterContext = createContext(null)

const CounterContextProvider = ({ children }) => {
    return (<CounterContext.Provider value={useState(0)}>
        {children}
    </CounterContext.Provider>)
}

const AddOneButton = () => {
    const [, setCounter] = useContext(CounterContext)
    return (<div>
        <button onClick={(() => { setCounter((v) => v + 1) })}>Add One</button>
    </div>)
};

const Counter = () => {
    const [counter] = useContext(CounterContext)
    return <div>Counter: {counter} </div>
}


const CounterUseState = () => {
    return (<div>
        <CounterContextProvider>
            <Container />
            <Counter />
        </CounterContextProvider>
    </div>
    )
};

export default CounterUseState;