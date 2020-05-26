import { useState, useEffect } from 'react';

export function useTitle(title) {
    useEffect(() => {
        document.title = title
    })
}

export function useCount(value) {
    const [count, setCount] = useState(value)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return [count, increment, decrement]
}