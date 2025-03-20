import CardProd from "./cardProd.jsx";
const productos = () => {
    let contenido = [{imgUrl:"https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=253X&client=byoc&paint=P0300&fabric=FKHSW&sa=S01CB%2CS01CE%2CS01HS%2CS02TB%2CS0302%2CS0319%2CS03AG%2CS03MB%2CS0403%2CS0430%2CS0431%2CS0459%2CS0465%2CS0481%2CS0493%2CS04H0%2CS04UR%2CS0534%2CS0544%2CS05AC%2CS0676%2CS06AC%2CS06AK%2CS06C4%2CS06NX%2CS06U2%2CS06WC%2CS0775&angle=270&quality=90&sharp=99&resp=jpg&cut=3&bkgnd=%23FFFFFF&width=700",
        titulo:"BMW M3",
        descripcion:"El BMW M3 es un automóvil deportivo de altas prestaciones basado en el BMW Serie 3, fabricado por la sub-marca Motorsport de BMW.",
        },{imgUrl: "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=255D&client=byoc&paint=P0300&fabric=FKSSW&sa=S01CE%2CS02TE%2CS0302%2CS0316%2CS0319%2CS0322%2CS03G2%2CS0403%2CS043L%2CS0459%2CS0494%2CS04FL%2CS04UR%2CS05AS%2CS05DM%2CS0674%2CS06AC%2CS06AK%2CS06C4%2CS06NX%2CS0775&date=20250227&angle=270&quality=90&sharp=99&resp=jpg&cut=3&bkgnd=%23FFFFFF&width=700",
            titulo:"BMW Serie 5",
            descripcion:"El BMW Serie 5 es una serie de automóviles de turismo de lujo del segmento E producido por el fabricante alemán BMW.",
        },{imgUrl: "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=25XB&client=byoc&paint=P0300&fabric=FKUSW&sa=S01ED%2CS02TF%2CS0302%2CS03AT%2CS03MB%2CS0420%2CS0459%2CS0494%2CS04AT%2CS04NW%2CS05A4%2CS05AC%2CS05AS%2CS05DM%2CS06AC%2CS0775%2CS07HW%2CS09T5&angle=270&quality=90&sharp=99&resp=jpg&cut=3&bkgnd=%23FFFFFF&width=700",
            titulo:"BMW X1",
            descripcion:"El BMW Serie 5 es una serie de automóviles de turismo de lujo del segmento E producido por el fabricante alemán BMW.",
        }
    ,{
        imgUrl: "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBI&vehicle=26IJ&client=byoc&paint=P0300&fabric=FSASW&sa=S01GQ%2CS0248%2CS0319%2CS0322%2CS0407%2CS0420%2CS0494%2CS04AA%2CS04NB%2CS05AC%2CS05AS%2CS05AT%2CS05DM%2CS0688%2CS06AC%2CS06AK%2CS06C4%2CS06CP%2CS06NX&angle=270&quality=90&sharp=99&resp=jpg&cut=3&bkgnd=%23F6F6F6&width=700",
        titulo:"BMW iX",
        descripcion:"El BMW iX es un automóvil eléctrico de lujo del segmento F producido por el fabricante alemán BMW."
    }]
        return(
            <div className="cardContainers" style={{display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"center",zIndex:"998"}}>
            {contenido.map((contenido) =>(
                <CardProd contenido = {contenido}/>
            ))}
            </div>
        )
}
export default productos;