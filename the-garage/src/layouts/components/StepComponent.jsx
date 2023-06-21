import rueda from '../../assets/rueda.png';

export const StepComponent = () => {
  return (
    <div className="serviceSteps">
      <div className="circle d-flex gap-3">
        <div className="d-flex gap-3 align-items-center">
          <div className="stepNumb">1</div>
          <img src={rueda} style={{ width: 90, height: 90 }} />
        </div>
        <div className="text-center">
          {`Busca el producto o
        servicio deseado`}
        </div>
      </div>
    </div>
  );
};
