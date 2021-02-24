import { useLocation } from 'react-router-dom';

const BrandLogo = () => {
  const location = useLocation();
  const getBrandLogo = () => {
    return location.pathname === "/" ? "https://github.com/Crazyloon/PickyNickys/blob/main/public/images/brand_wide.png" : "https://github.com/Crazyloon/PickyNickys/blob/main/public/images/brand_inverse_wide.png";
  }

  return ( 
    <>
      <img src={getBrandLogo()} alt="brand-logo" className="brand-logo" />
    </>
   );
}
 
export default BrandLogo;