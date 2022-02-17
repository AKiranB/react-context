import { useReducer, createContext, useContext } from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case 'add': {
            return state + 1
        }
        case 'minus': {
            return state - 1
        }
        default:
            return state;
    }
}

const CounterContext = createContext(null)

const CounterContextProvider = ({ children }) => {
    return (<CounterContext.Provider value={useReducer(reducer, 0)}>
        {children}
    </CounterContext.Provider>)
}

const Container = () => {
    const [, setCounter] = useContext(CounterContext)
    return (
        <div>
            <AddOneButton />
            <MinusOneButton />
        </div>)
}

const Counter = () => {
    const [counter] = useContext(CounterContext)
    return <div>Counter: {counter} </div>
}

const AddOneButton = () => {
    const [, dispatch] = useContext(CounterContext)
    return (<div>
        <button onClick={(() => dispatch({
            type: 'add',
        }))}>Add One</button>
    </div>)
};
const MinusOneButton = () => {
    const [, dispatch] = useContext(CounterContext)
    return (<div>
        <button onClick={(() => dispatch({
            type: 'minus',
        }))}>minus One</button>
    </div>)
};


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