import PropTypes from 'prop-types';

export const LoginForm =() => {
    const handleSubmit =(e) => {
        e.preventDefault()
      console.log(e.target);
}
      return (
     
        <form autoComplete='off' onSubmit={handleSubmit}>
            <label htmlFor='login'>
                Login
                <input type='text' name='login'/>
            </label>
            <label htmlFor='password'>
                Password
                <input type='text' name='password'/>
            </label>
            <button type='submit'>Submit</button>
        </form>
      )
    
}