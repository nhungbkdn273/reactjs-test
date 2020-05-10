import styled from "styled-components"

import COLORS from "../../themes/colors"
import TYPOGRAPHY from "../../themes/typography"

const WorkoutContainer = styled.div`
  width: 90%;
  margin: 5px auto;
  border-radius: 6px;
  border: 1px solid ${COLORS.grey.g300};
  background-color: ${COLORS.grey.g200};
  position: relative;
  opacity: ${(props) => props.opacity};
`
const MenuIcon = styled.span`
  position: absolute;
  top: 12px;
  right: 5px;
  display: flex;
`
const Dot = styled.span`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background-color: ${COLORS.grey.g600};
  margin-right: 1px;
`
const TruncatedText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const WorkoutName = styled(TruncatedText)`
  font-family: ${TYPOGRAPHY.fontFamily.bold};
  font-size: ${TYPOGRAPHY.fontSize.xxs};
  line-height: ${TYPOGRAPHY.lineHeight.xs};
  width: 85%;
  text-transform: uppercase;
  color: ${COLORS.purple};
  margin-left: 3%;
  margin-top: 4px;
  text-align: left;
`
const PlusButtonWrapper = styled.div`
  position: absolute;
`
const PlusButton = styled.span`
  background-color: ${COLORS.grey.g650};
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  &:before,
  &:after {
    content: "";
    width: 6px;
    height: 2px;
    background-color: white;
    position: absolute;
    top: 50%;
    right: 50%;
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:before {
    top: 5px;
    right: 3px;
    transform: ${(props) => (props.clicked ? `rotate(0deg)` : `rotate(90deg)`)};
    transition: 0.4s;
  }
`

export {
  WorkoutContainer,
  MenuIcon,
  Dot,
  WorkoutName,
  TruncatedText,
  PlusButton,
  PlusButtonWrapper,
}
