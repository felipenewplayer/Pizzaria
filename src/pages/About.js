import multiplePizzas from '../assets/multiplePizzas.jpeg'
import './About.css'
export const About = () => {
  return (
    <div className='about'>
       <div className='aboutTop'
        style={{ backgroundImage: `url(${multiplePizzas})`}}></div>
       <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ex vitae ex efficitur, nec aliquam mauris volutpat. Nam eget scelerisque mauris. Morbi facilisis vestibulum arcu, quis mattis turpis placerat non. Mauris sollicitudin eleifend justo, at cursus sapien euismod vel. Pellentesque sit amet neque lectus. Donec vitae nisi ac enim tristique sollicitudin. Maecenas eu diam vitae enim rhoncus sollicitudin. Suspendisse bibendum magna massa, ut gravida neque consectetur in. Donec venenatis lectus id ipsum blandit, et sollicitudin leo varius. Aenean finibus lectus eget viverra volutpat. Aliquam id nisl sed quam luctus scelerisque ut in augue. Maecenas sit amet ipsum neque. Ut mollis turpis ac mi vulputate facilisis. Vivamus scelerisque interdum vehicula. Donec ac urna finibus, cursus ligula nec, consequat quam. Sed feugiat justo congue lorem euismod varius.</p>
       </div>
    </div>
   
  )
}
