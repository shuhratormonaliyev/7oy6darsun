import { useState } from 'react';

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        try {
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`Error parsing localStorage item "${key}":`, error);
            return item || initialValue;
        }
    });

    const setValue = (value) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}
export default useLocalStorage;
