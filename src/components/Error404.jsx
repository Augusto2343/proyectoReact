const error404 = () =>{
    return (
        <div className="container-fluid d-flex" style={{height:"100vh", width:"100vw",justifyContent:"center",alignItems:"center",flexFlow:"column nowrap"}}>
                    <img src="../iconoError.png" alt="" />
                    <h2>Error 404 not found.</h2>
        </div>
    )
};
export default error404;