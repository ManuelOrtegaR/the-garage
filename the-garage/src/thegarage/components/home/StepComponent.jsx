import styled from '@emotion/styled';

export const StepComponent = ({ numb, text, img, color }) => {
  return (
    <div className="serviceSteps">
      <CircleStyled color={color} className="d-flex gap-3">
        <div className="d-flex gap-3 align-items-center">
          <StepNumb>{numb}</StepNumb>
          <img src={img} style={{ width: '90px', height: '90px' }} />
        </div>
        <div className="text-center" style={{ width: '200px' }}>
          {text}
        </div>
      </CircleStyled>
    </div>
  );
};

const CircleStyled = styled('div')(({ color }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: `20px solid ${color}`,
  borderRadius: '50%',
  width: '250px',
  height: '250px',
}));

const StepNumb = styled('div')(({ theme }) => ({
  fontFamily: theme.fontFamily.titleFont,
  fontSize: '4rem',
  color: theme.colors.mainColor,
}));
