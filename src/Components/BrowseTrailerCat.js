const BrowseTrailerCat = ({ logo, text, background }) => {
  return (
    <div className="box" style={{ backgroundColor: background }}>
      <div className="box-in">
        <img className="mb-3" src={logo} alt="logo" />
        <p className="m-0">{text}</p>
      </div>
    </div>
  )
}

export default BrowseTrailerCat;