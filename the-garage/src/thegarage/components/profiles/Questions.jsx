import { format } from 'date-fns';
import {
  ItemStyle,
  ListGroupStyle,
  ShowOrder,
  StatusStyle,
} from './StylesComponentsProfiles';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { PaginationProfiles } from './PaginationProfiles';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestions } from '../../../domain/useQuestions';

export const Questions = () => {
  const navigate = useNavigate();
  const { data: dataResponse, error, isLoading } = useQuestions();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const initialData = useRef(null);
  const [questionsBypage, setQuestionsByPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    if (dataResponse) {
      setData(dataResponse);
      initialData.current = dataResponse;
    }
  }, [dataResponse]);

  const lastIndex = currentPage * questionsBypage;
  const firstIndex = lastIndex - questionsBypage;

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === '') {
      setData(initialData.current);
    } else {
      const filtered = initialData.current.filter((message) => {
        return message.correo_contacto
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setData(filtered);
    }
  }, [searchValue]);

  const totalQuestions = data?.length;

  return (
    <div className="w-75 m-auto">
      <span className="fw-bold">Consultas</span>

      <div className="d-flex justify-content-between my-3">
        <Form.Control
          type="search"
          placeholder="Buscar Por Nombre"
          className="me-2 w-50"
          aria-label="Search"
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>
      <ListGroupStyle>
        {isLoading && <div>Loading...</div>}
        {error && (
          <Alert
            variant="danger"
            style={{ width: '75%', margin: 'auto', marginTop: '10px' }}
          >
            No se pudo cargar la lista de consultas, por favor actualice la
            página
          </Alert>
        )}
        {data &&
          !isLoading &&
          !error &&
          data
            .map((question) => (
              <div key={question.id}>
                <ItemStyle key={question.id} className="border-bottom">
                  <span className="col-4 col-md-3">
                    {question.nombre_contacto}
                  </span>
                  {viewportWidth > 900 && (
                    <span className="col-5 col-md-3">
                      {question.correo_contacto}
                    </span>
                  )}
                  <span className="col-2 col-md-3">
                    {format(new Date(question.fecha_consulta), 'dd/MM/yyyy')}
                  </span>
                  <div className="col-1 col-md-3">
                    {viewportWidth > 900 ? (
                      <StatusStyle
                        className={`${
                          question.estado_consulta !== 'pendiente'
                            ? 'Entregada'
                            : 'Enviada'
                        }`}
                      >
                        {question.estado_consulta}
                      </StatusStyle>
                    ) : (
                      <StatusStyle
                        className={`${
                          question.estado_consulta !== 'pendiente'
                            ? 'Entregada'
                            : 'Enviada'
                        }`}
                        style={{ paddingLeft: '10px', paddingRight: '10px' }}
                      ></StatusStyle>
                    )}
                  </div>
                  <ShowOrder
                    onClick={() => {
                      navigate(`${question.id}`, { state: question.id });
                    }}
                  >
                    <i
                      className="bi bi-eye-fill"
                      style={{ width: '20px', height: '20px' }}
                    />
                  </ShowOrder>
                </ItemStyle>
              </div>
            ))
            .slice(firstIndex, lastIndex)}
      </ListGroupStyle>

      <PaginationProfiles
        byPage={questionsBypage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={totalQuestions}
      />
    </div>
  );
};
