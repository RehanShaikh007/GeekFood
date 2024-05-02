// import SectionImg from "./images/section1.avif";
const Section1 = () =>{
    return(
        <>
         <div className="section1">
            <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="section1" />
            <section>
                <h1>Let us find your <strong style={{color:"rgb(190, 18, 60)"}}>Forever Food.</strong></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi earum minima placeat nulla in quisquam reiciendis animi enim!</p>
                <button className="searchbtn"><b>Search Now</b></button>
                <button className="knowbtn"><b>know More</b></button>
            </section>
         </div>
        </>
    )

    
}

export default Section1;