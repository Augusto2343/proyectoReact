
const loading = () =>{

    return(
        <div className="container-fluid  d-flex align-items-center justify-content-center flex-column" style={{width:"100vw", height:"100vh"}}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
        </div>
    )
}
export default loading;