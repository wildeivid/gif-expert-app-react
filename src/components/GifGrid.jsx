import PropTypes from 'prop-types';
import { GiftItem } from '../components';
import { useFetchGifts } from '../hooks/useFetchGifts';


export const GifGrid = ({category}) => {

    const {images, isLoading } = useFetchGifts(category);

  return (
    <>
        <h3>{ category }</h3>

        { isLoading && (<h3>Cargando...</h3>)}

        <div className='card-grid'>
            { images.map(i => <GiftItem key={i.id} {...i} />) }
        </div>
    </>
  )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
