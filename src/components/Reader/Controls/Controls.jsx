import React from 'react'
import { StyledButton } from './Controls.styled'
import { Csection } from './Controls.styled'

export const Controls =( {current, total,  onChange}) => {
  return (
    <Csection>
            <StyledButton 
            type='button'
            disabled ={current === 1}
             onClick = {() => onChange(-1)}
             >Back</StyledButton>
            <StyledButton
             type='button'
             disabled ={current === total}
             onClick = {() => onChange(1)}
              >Ahead</StyledButton>
        </Csection>
  )
}
