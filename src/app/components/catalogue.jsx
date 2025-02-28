
import '../styles/catalogue.css'
import {useAnimatedItems} from "../components/animatedItems";

const Catalogue = ({ webData }) => {
    useAnimatedItems();
    return (
        <div id='Catalogue' className="catalogue-main-div">
            <div className="catalogue-container">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-primary">
                {webData.catalogo.titulo}
                </h1>

                <a target="_blank" rel="noopener noreferrer"
                   className="catalogue-image-container">
                    <img className="catalogue-main-image animated-item" src={webData.catalogo.imagen} alt="catalogueImage"/>
                </a>
            </div>
        </div>
    )
}
export default Catalogue;