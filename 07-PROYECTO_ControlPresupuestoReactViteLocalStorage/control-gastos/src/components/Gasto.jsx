import React from 'react'
import { 
    LeadingActions, 
    SwipeableList, 
    SwipeableListItem, 
    SwipeAction, 
    TrailingActions 
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

// Importar helpers
import { formatearFecha } from '../helpers';

// Importar imagenes
import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';

const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
};

const Gasto = ({ gasto, setGastoEditar }) => {
  const { nombre, cantidad, categoria, id, fecha } = gasto;

  const leadingActions = () => (
      <LeadingActions>
          <SwipeAction onClick={() => setGastoEditar(gasto)}>
              Editar
          </SwipeAction>
      </LeadingActions>
  );

  const trailingActions = () => (
      <TrailingActions>
          <SwipeAction onClick={() => console.log('Eliminar...')}>
              Eliminar
          </SwipeAction>
      </TrailingActions>
  );

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}             // Accion de la izquierda
            trailingActions={trailingActions()}           // Accion de la derecha
        >
            <div className='gasto sombra'>
                <div className='contenido-gasto'>
                    <img 
                        src={diccionarioIconos[categoria]} 
                        alt="Icono Gasto" 
                    />

                    <div className='descripcion-gasto'>
                        {/* <p className='categoria'>{gasto.categoria}</p> */}
                        <p className='categoria'>{categoria}</p>
                        <p className='nombre-gasto'>{nombre}</p>
                        <p className='fecha-gasto'>
                            Agregado el: {''}
                            <span>{formatearFecha(fecha)}</span>
                        </p>
                    </div>
                </div>
                <p className='cantidad-gasto'>${cantidad}</p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto;