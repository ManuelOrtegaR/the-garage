import { SubTitleStyled, TextStyled } from './ComponentsStyles';
import company1 from '../../../../assets/images/home/empresas/empresa1.jpg';
import company2 from '../../../../assets/images/home/empresas/empresa2.jpg';
import company3 from '../../../../assets/images/home/empresas/empresa3.jpg';
import company4 from '../../../../assets/images/home/empresas/empresa4.jpg';
import company5 from '../../../../assets/images/home/empresas/empresa5.jpg';
import company6 from '../../../../assets/images/home/empresas/empresa6.jpg';
import company7 from '../../../../assets/images/home/empresas/empresa7.jpg';
import company8 from '../../../../assets/images/home/empresas/empresa8.jpg';
import company9 from '../../../../assets/images/home/empresas/empresa9.jpg';
import { IconContainer } from '../../../ui/components/ComponentsStyles';

export const OurCompanys = () => {
  return (
    <>
      <SubTitleStyled id="empresas">Empresas</SubTitleStyled>
      <TextStyled>
        Estas son algunas de las empresas que encontrarás en THE GARAGE
      </TextStyled>
      <div className="d-flex flex-wrap justify-content-center">
        <IconContainer src={company1} maxWidth="220px" />
        <IconContainer src={company2} maxWidth="220px" />
        <IconContainer src={company3} maxWidth="220px" />
        <IconContainer src={company4} maxWidth="220px" />
        <IconContainer src={company5} maxWidth="220px" />
        <IconContainer src={company6} maxWidth="220px" />
        <IconContainer src={company7} maxWidth="220px" />
        <IconContainer src={company8} maxWidth="220px" />
        <IconContainer src={company9} maxWidth="220px" />
      </div>
    </>
  );
};
