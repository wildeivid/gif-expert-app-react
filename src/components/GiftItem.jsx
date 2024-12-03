import PropTypes from 'prop-types';

export const GiftItem = ({id, title, url}) => {

  return (
    <div className="card" key={id}>
        <img src={url} alt={title} />
        <p className="card-p">{title}</p>
    </div>
  )
}

GiftItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
}
