import React from 'react'
import styled from '@emotion/styled'

function Button({ isLink = false, children, ...rest }) {
  return (
    <StyledButton as={isLink ? 'a' : 'button'} {...rest}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: inline-block;
  color: white;
  background: linear-gradient(
    90deg,
    var(--ifm-color-primary) 11.3%,
    var(--ifm-color-primary-light) 161.54%
  );
  box-shadow: 0px 0px 32px rgba(0, 105, 165, 0.35);
  border-radius: 7px;

  :hover {
    color: white;
    text-decoration: none;
  }
`

export default Button
