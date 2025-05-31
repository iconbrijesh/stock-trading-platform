import Hero from "./Hero.jsx";
import Trust from "./Trust.jsx";
import UnBeatablePrice  from "./UnBeatablePrice .jsx";
import Education from "./Education.jsx";

export default function HomePage(){
    return(
        <>
        <div className="mb-5">
            <Hero />

        </div>

         <div className="mt-5">
              <Trust />

        </div>
        
      
        <UnBeatablePrice />
        <Education />


        
        </>
    );
}