const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <img className="w-32 h-32 rounded-full mx-auto " src="https://media-exp1.licdn.com/dms/image/C5603AQGJtxPW3SBzfQ/profile-displayphoto-shrink_100_100/0/1538649138862?e=1624492800&v=beta&t=YuTkfcSlJ9WGI0J-SAhHpQjmh5E7WaCxJGCB-eKcQa0"></img>
      <h1 className="text-4xl leading-7 font-bold text-purple-600">
      Rodrigo Fraga Blog
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Blog com artigos sobre desenvolvimento e tecnologia
      </h4>
    </section>
  )
}

export default Intro
