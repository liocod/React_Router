import React from 'react' ;
import { useParams } from 'react-router-dom';
import { Datas } from '../Assets/Datas';

const Trailler = () => {

    const { id } = useParams();
    let object = Object.keys(Datas)
    console.log(object);
    let idtrailler = object[id]
    const trailler = Datas[idtrailler]

    return (
        <div>
            {/* <video src={trailler.srcMovie} type="video/mp4" width="320" height="240" controls></video>
            <div> */}
                <h3> {trailler.title} </h3>
       
            </div>    
        
    )
}
export default Trailler;