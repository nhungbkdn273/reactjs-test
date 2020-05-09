import styled from 'styled-components'

import COLORS from "../../themes/colors"
import TYPOGRAPHY from "../../themes/typography"

const DayWrapper = styled.div`
  width: 13.5%;
  height: 100%;
`;

const DayContainer = styled.div`
  width: 100%;
  height: 90vh;
  border-radius: 6px;
  background-color: ${COLORS.grey.g100};
  padding: 5px 0;
`

const Date = styled.p`
font-family: ${TYPOGRAPHY.fontFamily.base};
  font-weight: ${TYPOGRAPHY.fontWeight.base};
  font-size: ${TYPOGRAPHY.fontSize.xs};
  line-height: ${TYPOGRAPHY.lineHeight.sm};
  color: ${COLORS.grey.g800};
  text-align: left;
  margin-left: 5%;
  margin-top: 5px;
  margin-bottom: 5px;
`

const DayOfWeek = styled.p`
font-family: ${TYPOGRAPHY.fontFamily.base};
font-weight: ${TYPOGRAPHY.fontWeight.base};
  font-size: ${TYPOGRAPHY.fontSize.xxs};
  line-height: ${TYPOGRAPHY.lineHeight.xs};
  color: ${COLORS.grey.g900};
  text-transform: uppercase;
  text-align: left;
`

export { DayWrapper, DayContainer, Date, DayOfWeek }
