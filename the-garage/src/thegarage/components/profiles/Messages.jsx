import Image from 'react-bootstrap/Image';
import {
  BtnStateStyle,
  ItemStyle,
  ListGroupStyle,
} from './StylesComponentsProfiles';
import { useState } from 'react';
//import { mockDataTest } from '../../dataTest/dataMock';
import { PaginationProfiles } from './PaginationProfiles';
import { useNavigate } from 'react-router-dom';

export const Messages = () => {
  //const [data, setData] = useState(mockDataTest);
  const [messages, setMessages] = useState([...data]);
  const [messagesBypage, setMessagesByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalMessages = messages.length;

  const lastIndex = currentPage * messagesBypage;
  const firstIndex = lastIndex - messagesBypage;

  //React-router: Obtenemos el id de la url.
  const viewMessage = useNavigate();
  return (
    <>
      <div className="m-auto w-100 p-4 ">
        <div className="d-flex justify-content-between mb-4">
          <span className="fs-6 fw-bold">Mensajes</span>
          <div className="d-flex w-25  align-items-center">
            <span className="w-50">Filtrar por: </span>
            <select className="form-select" aria-label="Default select example">
              <option selected>Todo</option>
              <option value="1">Estado</option>
              <option value="2">Fecha</option>
              <option value="3">Tienda</option>
            </select>
          </div>
        </div>
        <ListGroupStyle>
          {messages
            .map((message) => (
              <>
                <ItemStyle className="border-bottom" key={message.id}>
                  <Image
                    src={message.image}
                    style={{ height: 65, width: 65 }}
                  />
                  <span className="col-2">{message.store}</span>
                  <span>
                    <strong className="col-2">{'Nombre del caso:'}</strong>
                  </span>
                  <span className="text-truncate col-5">
                    {
                      'Descripcion del problema. Este campo sera dinamico una ves de introduzca la base de datos'
                    }
                  </span>
                  <BtnStateStyle
                    variant={'open'}
                    onClick={() => viewMessage(`${message.id}`)}
                  >
                    {'Abierto'}
                  </BtnStateStyle>
                </ItemStyle>
              </>
            ))
            .slice(firstIndex, lastIndex)}
        </ListGroupStyle>

        <PaginationProfiles
          byPage={messagesBypage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={totalMessages}
        />
      </div>
    </>
  );
};
