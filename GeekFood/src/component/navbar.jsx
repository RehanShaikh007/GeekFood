import Logo from "./images/logo.svg";
const Navbar = () =>{
    return(
        <>
        <div className="navbar" style={{display:"flex",  flexWrap:"wrap", alignItems:"center", padding:"0 10em", justifyContent:"space-between", position:"fixed", top:"0", backgroundColor:"white", width:"79%", zIndex:"20"}}>
        <section className="nav1">
        <img src={Logo} alt="logo" />
          <h1>GeekFoods</h1>
        </section>
         
          <section className="nav2">
             <h3>Home</h3>
             <h3 style={{color:"blue"}}>Quote</h3>
             <h3>Restaurants</h3>
             <h3>Foods</h3>
             <h3>Contact</h3>
          </section>
          <section className="nav3">
            <button><b>Get Started</b></button>
          </section>
        </div>
        
        </>
       
    )
}

export default Navbar;