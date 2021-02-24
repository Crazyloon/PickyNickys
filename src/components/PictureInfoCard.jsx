const PictureInfoCard = ({imgName, imgAlt, description}) => {
  return ( 
    <div className="picture-info-card">
      <div className="picture-info-card-image">
        <img src={"https://raw.githubusercontent.com/Crazyloon/PickyNickys/main/public/images/".concat(imgName)} alt={imgAlt} />
      </div>
      <div className="picture-info-card-info">
        <p>{description}</p>
      </div>
    </div>
   );
}
 
export default PictureInfoCard;