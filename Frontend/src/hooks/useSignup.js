import {useState} from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const[error, setError] = useState(null)
    const[isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (username, email, password) => {
        setIsLoading(true)
        setError(null)
        console.log("working")
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({username,email,password})

      
        })
        console.log("working")
        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok) {
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }
    return {signup, isLoading, error}
}