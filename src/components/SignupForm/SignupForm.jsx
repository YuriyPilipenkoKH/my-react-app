
import { useState } from 'react'

export default function SignupForm () {

    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 

    // const  handleChangeEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // const  handleChangePassword = (e) => {
    //     setPassword(e.target.value)
    // }

    const  handleChange = (e) => {
        const {name, value} = e.target;
        const field  = name;
       

        if (field === 'email') {
        setEmail(value)
        }
        else if (field === 'password'){
            setPassword(value)
        }
        
    }


    return (
      <form autoComplete='off'>
        <label >
            <span> Email</span>
            <input 
            type = "email"
            name = "email"
            onChange={handleChange}
            value  = {email}
            />
        </label> 

        <label >
            <span> Password</span>
            <input 
            type = "password"
            name = "password"
            onChange={handleChange}
            value  = {password }
            />
        </label>

        <button type='submit'>Registration</button>
        
      </form>
    )

}
