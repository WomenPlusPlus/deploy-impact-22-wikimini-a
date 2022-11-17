import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
/* eslint-disable react/prop-types */
import { Container, Image } from '../styles/SearchResultContainer'
import { blue, green, red } from '../theme/colors'
import PropTypes from 'prop-types'
import ActiveContext from '../context'

const SearchResultContainer = ({ item }) => {
  const { active } = useContext(ActiveContext)
  const navigate = useNavigate()
  const categoryColor = (item) => {
    return item.category === 'article: '
      ? green
      : item.category === 'dictionary: '
      ? blue
      : red
  }

  const handleRedirects = () => {
    if (item.category === 'article: ') {
      active
        ? navigate(`/article/${item.title}/2`)
        : navigate(`/article/${item.title}/1`)
    }

    if (item.category === 'activity: ') {
      navigate(`/activity/${item.title}`)
    }
  }

  return (
    <Container onClick={() => handleRedirects()}>
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
