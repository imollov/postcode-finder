import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  min-width: 200px;
  min-height: 230px;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -100%);
`

const InnerBox = styled.div`
  background: ${(props) => props.theme.global.colors.brand};
  padding: 25px 35px;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const Triangle = styled.div`
  width: 0;
  height: 0;
  align-self: center;
  margin-top: -1px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid ${(props) => props.theme.global.colors.brand};
`

const MarkerBox = ({ ...rest }) => (
  <Container>
    <InnerBox {...rest} />
    <Triangle />
  </Container>
)

export default MarkerBox
