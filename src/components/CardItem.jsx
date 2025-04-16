import React from 'react';
const CardItem = ({ item }) => {
  const [estadoImg, setEstadoImg] = React.useState("white");

  const getImageSource = () => {
    switch (estadoImg) {
      case "white":
        return item.imgUrlW;
      case "red":
        return item.imgUrlRed;
      case "blue":
        return item.imgUrlBlue;
      case "black":
        return item.imgUrlBlack;
      case "orange":
        return item.imgUrlOrange;
      default:
        return item.imgUrlW;
    }
  };

  return (
    <div
      className="card"
      style={{
        border: "1px solid #000",
        borderRadius: "10px",
        margin: "10px",
        padding: "20px",
        height: "400px",
        width: "300px",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={getImageSource()} className="card-img-top" alt={item.id} />
      <div className="card-body">
        <div className="navColores">
          {item.coloresDisponibles && item.coloresDisponibles.length > 0 ? (
            item.coloresDisponibles.map((color) => (
              <button
                key={color}
                className="btnColores"
                id={color}
                onClick={() => setEstadoImg(color)}
              ></button>
            ))
          ) : (
            <p>No colors available</p>
          )}
        </div>

        <h5 className="card-title">{item.titulo}</h5>
        <p className="card-text">{item.descripcion}</p>
        <button className="btn btn-primary configurarBtn">Configurar</button>
      </div>
    </div>
  );
};

export default CardItem;

