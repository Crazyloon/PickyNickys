import { imagePath } from '../constants/constants';

const PictureInfoCard = ({imgName, imgAlt, description, reverse}) => {
  const classInfoImg = `picture-info-card${reverse ? " row-reverse" : ""}`;

  return ( 
    <div className={classInfoImg}>
      <div className="picture-info-card-image">
        <img src={`${process.env.PUBLIC_URL}/images/${imgName}`} alt={imgAlt} />
      </div>
      <div className="picture-info-card-info">
        <p>{description}</p>
      </div>
    </div>
   );
}
 
export default PictureInfoCard;