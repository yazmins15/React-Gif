import {GifItem} from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs(category);
    console.log(images,'  ',isLoading)

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading
                ? ( <h2> Cargando...</h2>)
                : null
            }           
        
            <div className="card-grid">
                {
                    images.map((image) => {
                      //  return (<li key={id}>{title}</li>)
                      return (<GifItem
                        key= {image.id}
                        {...image} //pasar todas las propiedades
                      />)
                    })
                }               
            </div>
        </>
        
    )
}