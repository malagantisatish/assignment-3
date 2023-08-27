import './index.css'

const ThumbnailImages = props => {
  const {thumbnailDetails, countTheScoreAndChange} = props
  const {id, imageUrl, thumbnailUrl, category} = thumbnailDetails
  const changeTheImage = () => {
    countTheScoreAndChange(id)
  }
  return (
    <li>
      <button type="button" className="btn">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image-size"
          onClick={changeTheImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailImages
