import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonCom = ({ variant, children }) => {
    return <Button 
                variant={variant}
                style={{ 
                    padding: '8px 30px', 
                    borderRadius: '20px', 
                    fontWeight: 'bold' 
                }}
            >
                {children}
            </Button>
}

Button.defaultProps = {
    variant: 'primary'
}

export default ButtonCom
