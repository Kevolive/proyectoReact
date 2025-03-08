import Contenido from "./Contenido"
import MenuLateral from "./MenuLateral"

function ListadoClientes() {
    return(
        <section className="panel-control">

        <MenuLateral />
        <Contenido />
    </section>
    )
}
export default ListadoClientes