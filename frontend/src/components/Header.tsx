interface HeaderProps {
  homeButton: string
  pricingButton: string
  accountButton: string
}

export const Header = () => {

  const style = `
          relative
          text-lg
          font-bold
          text-xl
          text-primary
          after:content-['']
          after:absolute
          after:left-0
          after:-bottom-1
          after:w-0
          after:h-0.5
          after:bg-secondary
          after:transition-all
          after:duration-700
          hover:after:w-full
  `
  return (

    // <div className="flex w-full flex-col">
    //   <nav className="top-menu">
    //     <ul className="flex space-x-4">
    //       <li className={style}><a href="/about">About</a></li>
    //       <li className={style}><a href="/assets">Assets</a></li>
    //       <li className={style}><a href="/plan">Plan</a></li>
    //       <li className={style}><a href="/view">View</a></li>
    //     </ul>
    //   </nav>
    //   <div className="divider divider-secondary"></div>
    // </div>

    <div className="bg-base-200 shadow-md p-4 mb-6">
      <div className="navbar bg-base-200 shadow-md p-4 mb-6">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost">Background-Remover</a>
        </div>
        <div className="flex-none gap-2">
          <a href="/about" className="btn btn-ghost">About</a>
          <a className="btn btn-ghost">API</a>
          <a className="btn btn-ghost">Contact</a>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>

  )

}
