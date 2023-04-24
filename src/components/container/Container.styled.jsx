import PropTypes from 'prop-types';
import { MainContainer } from './Container';

export const Container =({ children })  => {
    return <MainContainer className='container'>{children}</MainContainer>
}

Container.propTypes = {
    children: PropTypes.node,
  };
  