import styled from "styled-components"

import { colors } from "../../styles/colors"
import { fonts } from "../../styles/fonts"

export const Container = styled.View`
	flex: 1;
	padding-top: 71px;
	background-color: ${colors.white};
`
export const Header = styled.View`
	height: 80px;
	padding: 0 15px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
export const ProfileContent = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`

export const ProfileTexts = styled.View`
	align-self: center;
`
export const UserWelcomeText = styled.Text`
	font-family: ${fonts.dmSans400};
	font-size: 14px;
	color: ${colors.gray};
`
export const UserWelcomeSpanText = styled.Text`
	color: ${colors.blackTitle};
	font-size: 16px;
	line-height: 21px;
`
export const LogoutButton = styled.TouchableOpacity`
	align-items: center;
	width: 60px;
`
export const LogoutButtonText = styled.Text`
	font-family: ${fonts.dmSans500};
	font-size: 12px;
`
