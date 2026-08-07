// hooks/useLocalStorage.ts
import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
    // Функция для получения значения из localStorage
    const getStoredValue = useCallback((): T => {
        try {
            const item = localStorage.getItem(key);
            if (item) {
                const parsed = JSON.parse(item);
                // Проверяем, что parsed является массивом и не пустой
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed as T;
                }
                // Если это не массив или пустой, возвращаем как есть
                if (parsed !== null && parsed !== undefined) {
                    return parsed as T;
                }
            }
        } catch (error) {
            console.error('Ошибка загрузки из localStorage:', error);
        }
        return initialValue;
    }, [key, initialValue]);

    const [storedValue, setStoredValue] = useState<T>(() => getStoredValue());

    // Обновляем localStorage при изменении storedValue
    useEffect(() => {
        try {
            if (storedValue !== undefined && storedValue !== null) {
                // Проверяем, что это массив и он не пустой
                if (Array.isArray(storedValue) && storedValue.length === 0) {
                    // Если массив пустой, удаляем из localStorage
                    localStorage.removeItem(key);
                } else {
                    localStorage.setItem(key, JSON.stringify(storedValue));
                }
            }
        } catch (error) {
            console.error('Ошибка сохранения в localStorage:', error);
        }
    }, [storedValue, key]);

    // Функция для обновления значения
    const setValue = useCallback((value: T | ((prev: T) => T)) => {
        setStoredValue((prev) => {
            const newValue = typeof value === 'function' 
                ? (value as (prev: T) => T)(prev) 
                : value;
            return newValue;
        });
    }, []);

    return [storedValue, setValue];
}