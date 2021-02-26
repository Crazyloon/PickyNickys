const Card = ({imgSrc, heading, body}) => {
  return ( 
    <>
      <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/${imgSrc}`} className="card-img-top" alt="..." />
          {/* <HorizontalBorder primaryColor={true} gradientDirection={'rl'}/> */}
          <div className="card-body">
            <h5 className="card-title">{heading}</h5>
            <p className="card-text">{body}</p>
            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
          </div>
      </div>
    </>
   );
}
 
export default Card;