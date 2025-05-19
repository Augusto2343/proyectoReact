import CardItem from './CardItem'; // asegurate de tenerlo en la misma carpeta o importar bien

const Card = ({ items }) => {

  return (
    <>  
        
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </>
  );
};
export default Card