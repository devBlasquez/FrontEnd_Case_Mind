import React from "react"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import Toast from "react-native-toast-message"
import { useAuth } from "../../hooks/useAuth"
import { colors } from "../../styles/colors"

import {
	Container,
	Header,
	ProfileContent,
	ProfileTexts,
	UserWelcomeText,
	UserWelcomeSpanText,
	LogoutButton,
	LogoutButtonText,
} from "./styles"

export default function Home() {
	const { user, signOut } = useAuth()

	const navigation = useNavigation()

	async function handleLoggout() {
		try {
			await signOut()
		} catch (error) {
			Toast.show({
				type: "error",
				position: "bottom",
				text1: "Erro",
				text2: "Não foi possível deslogar no app",
			})
		}
	}

	return (
		<Container>
			<Header>
				<ProfileContent onPress={() => navigation.navigate("Profile")}>
					<ProfileTexts>
						<UserWelcomeText>Bem-vindo(a)</UserWelcomeText>
						<UserWelcomeSpanText>{user?.name}</UserWelcomeSpanText>
					</ProfileTexts>
				</ProfileContent>
				<LogoutButton onPress={handleLoggout}>
					<LogoutButtonText>Logout</LogoutButtonText>
					<Ionicons name="arrow-back" color={colors.black} size={20} />
				</LogoutButton>
			</Header>
		</Container>
	)
}
