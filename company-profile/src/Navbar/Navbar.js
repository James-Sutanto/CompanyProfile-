import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>TSSI</div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Products</li>
        <li>Clients</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
