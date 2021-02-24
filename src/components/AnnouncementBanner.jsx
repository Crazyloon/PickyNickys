const AnnouncementBanner = ({title, details, classList}) => {
  return ( 
    <div className={"announcement-banner " + classList}>
      <h1>{title}</h1>
      {details ? <p>{details}</p> : null}
    </div>
  );
}
 
export default AnnouncementBanner;