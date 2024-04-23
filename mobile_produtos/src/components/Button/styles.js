import styled from "styled-components"

import { colors } from "../../styles/colors"
import { fonts } from "../../styles/fonts"

export const Container = styled.TouchableOpacity`
	width: 100%;
	height: 65px;
	align-items: center;
	justify-content: center;
	background-color: ${colors.orange};
	border-radius: 14px;
`
export const ButtonText = styled.Text`
	text-transform: uppercase;
	font-family: ${fonts.dmSans500};
	color: ${colors.white};
	font-size: 16px;
`
