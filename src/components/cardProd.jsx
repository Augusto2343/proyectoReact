const cardProducto = ({contenido}) =>{

    return (
        <div className="card" style={{border:"1px solid #000",borderRadius:"10px",margin:"10px",padding:"20px", height:"400px", width:"300px",displayf:"flex",flexFlow:"column nowrap",justifyContent:"center",alignItems:"center"}}>
            <img src={contenido.imgUrl} className="card-img-top" alt="bmw m3"/>
            <div className="card-body">
                <h5 className="card-title">{contenido.titulo}</h5>
                <p className="card-text">{contenido.descripcion}</p>
                <a href="${contenido.url}" className="btn btn-primary" >Configurar</a>
            </div>
        </div>
        )
        }

export default cardProducto;
