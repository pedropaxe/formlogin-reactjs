import './form.css'
import Input from '../input'
import InputPassword from '../password/input'
import Button from '../button/button'




export default function Form() {
    return (
        <form className='form'>
            <h2 id='sign'>Sign In</h2>
            <Input />
            <InputPassword />
            <div className='text'>Forgot Password?</div>
            <Button />
            <div className='sign-text'>or continue with</div>
           
            <div className='icons'>

            

            </div>
        </form>
    )
} 

