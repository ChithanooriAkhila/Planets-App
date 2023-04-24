// Write your code here
import './index.css'

const PlanetsItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div>
      <img src={imageUrl} alt={`planet ${name}`} className="image-url" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default PlanetsItem
