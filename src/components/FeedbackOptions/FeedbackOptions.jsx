import React from 'react'
import PropTypes from 'prop-types'
import {FeedBackContainer, FeedBackBtn} from './FeedbackOptions.styled'

function FeedbackOptions({ options, onValueBtnClick }) {
    return (
        <FeedBackContainer>
            {options.map(option =>
                <FeedBackBtn
                    key={option}
                    name={option}
                    type="button"
                    onClick={onValueBtnClick}
                >
                    {option}
                </FeedBackBtn>)}
        </FeedBackContainer>
    )
}

FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(PropTypes.string),
    onValueBtnClick: PropTypes.func.isRequired,
}

export default FeedbackOptions
