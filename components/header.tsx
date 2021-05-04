import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-c_preto py-4 md:py-10 mb-10 border-b-4 border-c_cinza">
    <div className="container px-4 mx-auto md:flex md:items-center">

      <div className="flex justify-between items-center">
      <img className="w-24 h-24 rounded-full mx-auto border-2 border-c_amarelo" src="https://media-exp1.licdn.com/dms/image/C5603AQGJtxPW3SBzfQ/profile-displayphoto-shrink_100_100/0/1538649138862?e=1624492800&v=beta&t=YuTkfcSlJ9WGI0J-SAhHpQjmh5E7WaCxJGCB-eKcQa0"></img>
      
      <Link href="/"><a href="#" className="ml-8 text-3xl md:text-7xl font-bold text-c_amarelo">Rodrigo Fraga</a>
      </Link>
      </div>

      <div className=" md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 text-white" id="navbar-collapse">
        <Link href="/"><a href="#" className="ml-8 text-1xl md:text-2xl font-bold ">Home</a>
        </Link>
        <Link href="/about"><a href="#" className="ml-8 text-1xl md:text-2xl font-bold ">Sobre</a>
        </Link>
      </div>
      
    </div>
  </div>

  )
}

export default Header
