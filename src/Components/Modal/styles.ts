import styled from 'styled-components'

interface Props {
  isOpen: boolean
}

export const Wrapper = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0.8px);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  .modal-content {
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  .video {
    img {
      cursor: pointer;
    }

    display: flex;
    color: #000;
    align-items: center;
    gap: 1rem;
  }

  .video-data {
    p {
      font-size: 0.865rem;
      max-width: 700px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`
