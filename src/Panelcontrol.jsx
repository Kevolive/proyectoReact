const PanelControl = () => {
    //El retorno es HTML
return (
   <section className="panel-control">
    <aside className="panel-control-aside">
        <div>
            <img src="/public/guerrero.webp" alt="warrior" />
        </div>
        <nav>
            <a href="">Enlace</a> 
            <a href="">Enlace</a>
            <a href="">Enlace</a>
            <a href="">Enlace</a>
        </nav>
    </aside>
    <div className="panel-control-contenido">
        <section className="panel-control-card">
            <div></div>
            <div><h2>Ver</h2></div>
        </section>
        <section  className="panel-control-card">
            <div></div>
            <div><h2>Ver</h2></div>
        </section>
        <section  className="panel-control-card">
            <div></div>
            <div><h2>Ver</h2></div>
        </section>
    </div>
   </section>
)

 
}
export default PanelControl 