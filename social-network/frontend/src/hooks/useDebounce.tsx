import { useEffect, useRef, useState } from "react"

export const useDebounce = (text: string, delay: number = 500) => {
    const [debouncedText, setDebouncedText] = useState("")
    const timeoutRef = useRef(-1)

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setDebouncedText(text)
        }, delay)

        return () => clearTimeout(timeoutRef.current)
    }, [text, delay])

    return debouncedText
}