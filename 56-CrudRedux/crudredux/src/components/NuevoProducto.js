const NuevoProducto = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>

            <form>
              <div className="form-group">
                <label htmlFor="nombre" >Nombre Producto</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  id="nombre"
                  placeholder="Nombre Producto"
                />
              </div>

              <div className="form-group">
                <label htmlFor="precio" >Precio Producto</label>
                <input
                  type="number"
                  name="precio"
                  className="form-control"
                  id="precio"
                  placeholder="Precio Producto"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default NuevoProducto;