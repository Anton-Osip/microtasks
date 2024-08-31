import {adidasArr} from './ADIDAS'
import {useParams} from "react-router-dom";

export const SnickersPage = () => {
    const params = useParams()
    // @ts-ignore
    const filteredData = adidasArr.filter((adidas, index) => index === +params.id)[0]
    return <div>
        <h1>{filteredData.model}</h1>
        <img src = {filteredData.picture} alt = {filteredData.model}/>
        <h3>{filteredData.price}</h3>
        <h3>{filteredData.collection}</h3>
    </div>
}
