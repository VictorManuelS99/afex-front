import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  .delete {
    position: absolute;
    top: 3%;
    right: 2%;
    padding: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    cursor: pointer;
    background-color: #000;
    opacity: 0.8;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  img {
    cursor: pointer;
  }
`
