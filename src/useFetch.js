import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState()
    useEffect(() => {
        fetch(url).then((response) => {
            response.json().then((result) => {
                setData(result)
            })
        })
    }, [])
    return data

}

export default useFetch