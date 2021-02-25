const AnnouncementBanner = ({title, details, detailLink, classList}) => {
  const deets = detailLink ? 
    <a href={`${detailLink}`} >
      <p>{details}</p>
    </a>
   : <p>{details}</p>;

  return ( 
    <div className={"announcement-banner " + classList}>
      <h1>{title}</h1>
      {details ? deets : null}
    </div>
  );
}
 
export default AnnouncementBanner;