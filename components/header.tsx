import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-color_1 py-4 md:py-10 mb-10 border-b-4 border-accent-7">
    <div className="container px-4 mx-auto md:flex md:items-center">

      <div className="flex justify-between items-center">
      <img className="w-24 h-24 rounded-full mx-auto" src="https://media-exp1.licdn.com/dms/image/C5603AQGJtxPW3SBzfQ/profile-displayphoto-shrink_100_100/0/1538649138862?e=1624492800&v=beta&t=YuTkfcSlJ9WGI0J-SAhHpQjmh5E7WaCxJGCB-eKcQa0"></img>
      
      <Link href="/"><a href="#" className="ml-8 text-6xl md:text-7xl font-bold ">Rodrigo Fraga</a>
      </Link>
      </div>

      <div className=" md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
        Apenas mais um blog sobre desenvolvimento com um texto aqui
      </div>
    </div>
  </div>

  )
}

export default Header
