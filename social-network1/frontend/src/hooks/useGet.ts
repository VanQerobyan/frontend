import axios from "axios"
import { useEffect, useState } from "react"
import { http } from "../helpers/http"

export type UseGetReturn<T> = {
    data: T | null
    error: string
    loading: boolean
    refetch: () => void
}

export const useGet = <T>(url: string): UseGetReturn<T> => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const refetch = () => {
        setLoading(true)

        http
            .get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) {
                    setError(error.response?.data.message)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        refetch()
    }, [])

    return {
        data,
        error,
        loading,
        refetch
    }
}