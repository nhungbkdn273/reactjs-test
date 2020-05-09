import styled from 'styled-components'

import COLORS from "../../themes/colors"
import TYPOGRAPHY from "../../themes/typography"
import { TruncatedText } from '../Workout/styles'

const ExerciseWrapper = styled.div`
  border: 1px solid ${COLORS.grey.g400};
box-sizing: border-box;
box-shadow: 0px 0px 4px ${COLORS.grey.g50};
border-radius: 3px;
width: 95%;
margin: 0 auto 3px auto;
`
const ExerciseName = styled(TruncatedText)`
font-family: ${TYPOGRAPHY.fontFamily.base};
  font-weight: ${TYPOGRAPHY.fontWeight.base};
  font-size: ${TYPOGRAPHY.fontSize.xs};
line-height: ${TYPOGRAPHY.lineHeight.lg};
text-align: right;
max-width: 90%;
margin: 2px 0 0 5px;
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  padding: ${props => props.padding};
`
const ExerciseNumber = styled.span`
font-family: ${TYPOGRAPHY.fontFamily.bold};
font-size: ${TYPOGRAPHY.fontSize.xxs};
line-height: ${TYPOGRAPHY.lineHeight.xs};
color: ${COLORS.grey.g700};
text-align: right;
margin: 0 0 4px 5px;
`
const ExerciseInformation = styled(TruncatedText)`
font-family: ${TYPOGRAPHY.fontFamily.base};
font-size: ${TYPOGRAPHY.fontSize.xxs};
line-height: ${TYPOGRAPHY.lineHeight.xs};
color: ${COLORS.grey.g500};
text-align: right;
max-width: 70%;
margin: 2px 5px 5px 0;
`

const Input = styled.input`
  width: ${props => props.width};
  height: 8px;
  margin: ${props => props.margin};
`

export { ExerciseWrapper, ExerciseName, FlexWrapper, ExerciseNumber, ExerciseInformation, Input }