import { useLocation } from 'react-router-dom';

const BrandLogo = () => {
  const location = useLocation();
  const getBrandLogo = () => {
    return location.pathname === "/" ? "/images/brand_wide.png" : "/images/brand_inverse_wide.png";
  }

  return ( 
    <>
      <img src={getBrandLogo()} alt="brand-logo" className="brand-logo" />
    </>
   );
}
 
export default BrandLogo;