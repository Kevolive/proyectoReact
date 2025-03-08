import Contenido from "./Contenido"
import MenuLateral from "./MenuLateral"

const PanelControl = () => {
    //El retorno es HTML
    return (
        <section className="panel-control">

            <MenuLateral />
            <Contenido />
        </section>
    )


}
export default PanelControl 