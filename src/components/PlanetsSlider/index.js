// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

class PlanetsSlider extends Component {
  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    const {planetsList} = this.props

    return (
      <div data-testid="planets">
        <h1>Planets</h1>
        <Slider {...settings}>
          {planetsList.map(planet => (
            <PlanetItem planetDetails={planet} />
          ))}
        </Slider>
      </div>
    )
  }
}
export default PlanetsSlider
