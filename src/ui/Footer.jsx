const Footer = () =>{

    return(
        <footer className="bg-cyan-950 text-white py-8 tracking-widest">
         <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Raahi - راہی</h2>


    <div className="mb-4">
      <a href="#" className="mx-2">
        <i className="fab fa-facebook fa-lg hover:text-blue-400"></i>
      </a>
      <a href="#" className="mx-2">
        <i className="fab fa-twitter fa-lg hover:text-blue-400"></i>
      </a>
      <a href="#" className="mx-2">
        <i className="fab fa-instagram fa-lg hover:text-pink-500"></i>
      </a>
      <a href="#" className="mx-2">
        <i className="fab fa-linkedin fa-lg hover:text-blue-400"></i>
      </a>
    </div>

    <div className="text-base">
      Copyright &copy; {new Date().getFullYear()}  raahi.com.pk  All rights reserved.
    </div>
  </div>
</footer>
    )
}

export default Footer;