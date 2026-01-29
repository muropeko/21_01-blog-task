import { useState, useEffect } from "react";

export const useDebounce = (value: string) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    const delay = 200

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay)

        return () => clearTimeout(handler)
    }, [value])

    return debouncedValue
};
