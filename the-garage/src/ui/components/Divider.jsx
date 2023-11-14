/* eslint-disable react/prop-types */
export const Divider = ({ color, height }) => {
  return (
    <div className="d-flex" style={{ height: height, color: color }}>
      <div className="vr"></div>
    </div>
  );
};
