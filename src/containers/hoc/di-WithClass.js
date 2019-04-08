import React from 'react'

const diWithClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default diWithClass
