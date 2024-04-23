import styled from "styled-components"

import { colors } from "../../styles/colors"
import { fonts } from "../../styles/fonts"

export const Container = styled.View`
	background-color: ${colors.white};
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 0 26px;
`

export const ParagraphText = styled.Text`
	font-size: 16px;
	font-family: ${fonts.dmSans500};
	color: ${colors.black};
	margin-top: 32px;
`
