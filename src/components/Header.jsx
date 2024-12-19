import chefClaude from '../assets/chef-claude.png'

function Header() {
  return (
    <div className='header'>
      <img className='logo' src={chefClaude} alt="Chef Claude Logo" />
      <h1 className='title'>Chef Claude</h1>
    </div>
  )
}

export default Header