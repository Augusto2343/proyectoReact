import{ Link} from "react-router-dom";
import React from "react";
const categories = () =>{
    const [estadoFlecha, setEstadoFlecha] = React.useState("black")

    return( 
        <>
        <div className="container-fluid d-flex align-items-center flex-row " style={{backgroundColor:"white",justifyContent:"space-between",width:"100%",paddingTop:"100px", paddingLeft:"50px",paddingRight:"50px"}}>
            
            <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={estadoFlecha} onMouseOver={() =>setEstadoFlecha("#005c7d")} onMouseLeave={()=>setEstadoFlecha("black")} className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </Link>
            <h2>Categories</h2>
            </div>
        <div className="categories container-fluid d-flex align-items-center" style={{width:"100vw", height:"100vh"}}>
            
            <div className= "row">
                <div className="card col-md-4">
                    <div className="card-body d-flex flex-column align-items-center">
                    <img src="https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=265A&client=byo&paint=P0C4A&fabric=FKSSW&sa=S01CE,S0248,S02TE,S0302,S0316,S0319,S0322,S0337,S03GA,S03M1,S0403,S043L,S0459,S0494,S04FL,S0552,S05AS,S05DM,S0674,S06AC,S06AK,S06C4,S06NX,S0704,S0710,S0760,S0775,S09T1,S09T2,S09TA&date=20250304&angle=40&quality=65&sharp=100&resp=png&BKGND=TRANSPARENT&width=2000" alt="" className="card-img"/>
                        <h5 className="card-title">Sedans</h5>
                        <p className="card-text">Sedans a escala de diferentes marcas y modelos.</p>
                        <Link to={"/categories/sedan"} className="btn btn-primary" onClick={
                            () => {}
                        }>Ver más</Link>
                    
                    </div>
                </div>
                <div className="card col-md-4">
                    <div className="card-body d-flex flex-column align-items-center">
                        <img src="https://tmnaassetscs.scene7.com/is/image/tmnaassetscs/vcr/live/vehicle/TOY/2025/landcruiser/6165/182/42b23c9ee009a3d9e4bea9b1f8050ca5e4073feee67e7dce402f9118e2465ecb.png?wid=1200&fmt=webp-alpha" alt="" className="card-img"/>
                        <h5 className="card-title">Suvs</h5>
                        <p className="card-text">Suvs de diferentes marcas y modelos.</p>
                        <Link to={"/categories/suv"} className="btn btn-primary">Ver más</Link>

                    </div>
                </div>
                <div className="card col-md-4">
                    <div className="card-body d-flex flex-column align-items-center">
                        <img src="https://build.ford.com/dig/Ford/Maverick/2024/HD-FULL[INTBCK]/Image%5B%7CFord%7CMaverick%7C2024%7C1%7C1.%7C500A...PYZ..886.89W.96G.17V.54P.86B.16B.60B.61D.47A.43L.51D.645.66B.4WD.999.%5D/EXT/5/vehicle.png" alt="" className="card-img"/>
                        <h5 className="card-title">Camionetas</h5>
                        <p className="card-text">Camionetas de diferentes marcas y modelos.</p>
                        <Link to={"/categories/camioneta"} className="btn btn-primary">Ver más</Link>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default categories;