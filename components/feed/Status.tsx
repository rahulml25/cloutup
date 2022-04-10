
const Status = (props) => {
  const {userSrc, statusSrc} = props;

  return (
    <div className="relative cursor-pointer">
      <img
  	    src={userSrc}
  	    className="absolute m-1 p-0.5 h-10 bg-white rounded-full shadow z-[3]" alt=""
      />
  	  <img
  	    src={statusSrc}
  	    className="h-32 rounded-xl hover:scale-[1.05] shadow-md z-[1]" alt=""
  	  />
  	  {props?.children}
  	</div>
  )
}

export default Status;
