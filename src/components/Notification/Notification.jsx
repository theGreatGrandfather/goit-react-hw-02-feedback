import React from 'react'
import PropTypes from 'prop-types'
import {Paragraph} from './Notification.styled'

function Notification({message}) {
    return (
        <Paragraph>
            {message}
        </Paragraph>
    )
}

Notification.propTypes = {}

export default Notification