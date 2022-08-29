// Importar componentes react bootstrap
import { Image, Modal } from "react-bootstrap";
// Importar el custom hooks bebidas
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {

const { modal, handleModalClick, receta/*, setReceta*/, cargando } = useBebidas();
  console.log(receta);

  const mostrarIngredientes = () => {
    let ingredientes = [];

    for(let i = 1; i < 16; i++) {
      if(receta[`strIngredient${i}`]) {
        // Agregar un elemento al array
        ingredientes.push(
          <li key={i}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
        );
      }
    }

    return ingredientes;
  };

  return (
    !cargando && (
      <Modal 
        show={modal}
        onHide={handleModalClick}
        // onHide={() => {
        //   // LLamando varias funciones
        //   handleModalClick();
        //   setReceta({});
        // }}
      >
        <Image 
          src={receta.strDrinkThumb}
          alt={`Imagen receta ${receta.strDrink}`}
        />

        <Modal.Header>
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones</h2>
            {receta.strInstructions}

            <h2>Ingredientes y Cantidades</h2>
            <ul>
              {mostrarIngredientes()}
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    )
  )
}

export default ModalBebida