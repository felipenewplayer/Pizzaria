import './Contact.css';
import pizzaLeft from '../assets/pizzaLeft.jpg'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide'
        style={{ backgroundImage: `url(${pizzaLeft})` }}></div>

      <div className='rightSide'>
        <h1>Contact Us</h1>

        <form id='contact-form' method='POST'>
          <label htmlFor='name'>FullName</label>
          <input name='name' placeholder='Enter full name...' type='text'></input>
          <label htmlFor='name'>Email</label>
          <input name='email' placeholder='Enter email...' type='email'></input>
          <label htmlFor='message'>Message</label>
          <textarea 
          rows= '6' 
          placeholder='Enter message...' 
          name='message' 
          required
          >

          </textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}
