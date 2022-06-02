import { useEffect, useState } from "react";



export const EndPoint = () => {

    const [datos, setDatos] = useState<any[]>([]);

    useEffect(() => {
        getApi();
    }, [])


    const getApi = async () => {

        //const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=l2jskVVvaxZExQNCnyaXQ1eU3UasbhOg';
        //const url = 'http://localhost/NODEAPI/';
        //const url = 'http://localhost:3001/';
        const url = 'http://35.227.184.228/NODE';
        
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map((img: any) => {
            return {
                id: img.id,
                image: img.image,
                name: img.name,
                price: img.price,
            }
        });

        console.log(gifs);
        setDatos(gifs);
    }



    return (
        <>
            <h1 className="title">Inicio</h1>

            <div className="container">
                <div className="row">
                {
                    datos.map(lista => (

                        <>
                        
                        <div key={lista.id} className="card col-6">
                            <img className="card-img-top" src={lista.image} />
                            <div className="card-body">
                                <p className="card-text">  {lista.name} </p>
                                <p className="card-text">  {lista.price} </p>                                
                            </div>
                        </div>
                       
                        </>
                    ))
                }
         
                </div>
            </div>

        </>
    )
}
