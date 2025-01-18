import chefGPT from '../assets/chef-GPT.png'

function Header() {
  return (
    <div className='header'>
      <img className='logo' src={chefGPT} alt="Chef GPT Logo" />
      <h1 className='title'>Chef GPT</h1>
    </div>
  )
}

export default Header