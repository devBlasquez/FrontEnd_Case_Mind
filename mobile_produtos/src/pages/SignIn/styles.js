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
export const Image = styled.Image`
	width: 177px;
	height: 114px;
	margin-bottom: 15%;
`
export const ForgotText = styled.Text`
	font-size: 12px;
	font-family: ${fonts.dmSans400};
	color: ${colors.info};
	margin-bottom: 24px;
	align-self: flex-start;
`
export const ParagraphText = styled.Text`
	font-size: 16px;
	font-family: ${fonts.dmSans700};
	color: ${colors.black};
	margin-top: 32px;
`
