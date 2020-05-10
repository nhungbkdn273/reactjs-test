import React from "react"
import PropTypes from "prop-types"

import {
  ExerciseWrapper,
  FlexWrapper,
  ExerciseNumber,
  ExerciseInformation,
  ExerciseName,
  Input,
} from "./styles"

const Exercise = ({
  exercise,
  isInput,
  nameRef,
  numberRef,
  infoRef,
  handleOnKeyDown,
}) => {
  return (
    <ExerciseWrapper>
      {isInput ? (
        <Input
          ref={nameRef}
          defaultValue=""
          width="90%"
          onKeyDown={handleOnKeyDown}
        />
      ) : (
        <ExerciseName>{exercise.name}</ExerciseName>
      )}
      <FlexWrapper justifyContent="space-between" alignItems="center">
        {isInput ? (
          <Input
            ref={numberRef}
            defaultValue=""
            width="10%"
            margin="0 0 4px 5px"
            onKeyDown={handleOnKeyDown}
          />
        ) : (
          <ExerciseNumber>{exercise.number}</ExerciseNumber>
        )}
        {isInput ? (
          <Input
            ref={infoRef}
            defaultValue=""
            width="60%"
            margin="2px 5px 5px 0"
            onKeyDown={handleOnKeyDown}
          />
        ) : (
          <ExerciseInformation>{exercise.information}</ExerciseInformation>
        )}
      </FlexWrapper>
    </ExerciseWrapper>
  )
}

Exercise.defaultProps = {
  exercise: {},
  isInput: false,
  nameRef: {},
  numberRef: {},
  infoRef: {},
  handleOnKeyDown: () => {},
}

Exercise.propTypes = {
  exercise: PropTypes.object,
  isInput: PropTypes.bool,
  nameRef: PropTypes.object,
  numberRef: PropTypes.object,
  infoRef: PropTypes.object,
  handleOnKeyDown: PropTypes.func,
}

export default Exercise
