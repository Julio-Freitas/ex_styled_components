import { useContext } from "react";
import { CounterContext } from '../context/counter/context'

export default function UseCount () {
    const context = useContext(CounterContext);
    if(context) return context;
    throw new Error('The context do not exixt')
}