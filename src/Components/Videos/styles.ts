import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 1000px;
  gap: 0.25rem;

  max-height: 600px;
  overflow-x: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    border: 2px solid #fff;
  }
`
