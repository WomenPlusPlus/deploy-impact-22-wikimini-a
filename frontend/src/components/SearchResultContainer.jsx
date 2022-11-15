import { useNavigate } from 'react-router-dom'
/* eslint-disable react/prop-types */
import { Container, Image } from '../styles/SearchResultContainer'
import { blue, green, red } from '../theme/colors'
import PropTypes from 'prop-types'

const SearchResultContainer = ({ item }) => {
  const navigate = useNavigate()
  const categoryColor = (item) => {
    return item.category === 'article: '
      ? green
      : item.category === 'dictionary: '
      ? blue
      : red
  }

  return (
    <Container
      onClick={() => {
        navigate(`/article/${item.title}`)
      }}
    >
      <Image borderColor={categoryColor(item)} src={item.image} />
      <p>
        <span
          style={{
            color: categoryColor(item),
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}
        >
          {item.category}
        </span>
        {item.title}
      </p>
    </Container>
  )
}

export default SearchResultContainer

SearchResultContainer.propTypes = {
  item: PropTypes.object,
}
