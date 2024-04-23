import React, { useState } from "react"
import { Text, TouchableWithoutFeedback, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import Toast from "react-native-toast-message"
import * as Yup from "yup"
import Logo from "../../assets/logo.png"
import { Input } from "../../components/Input"
import { Container, Image, ForgotText, ParagraphText } from "./styles"
import { Button } from "../../components/Button"
// import { useAuth } from "../../hooks/useAuth"
import { colors } from "../../styles/colors"
import { fonts } from "../../styles/fonts"

export default function SignIn() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [showPassword, setShowPassword] = useState("")
	const [validationErrors, setValidationErrors] = useState("")

	// const { SignIn } = useAuth()

	const navigation = useNavigation()

	async function handleSignIn() {}

	return (
		<Container>
			<Image source={Logo} />
			<Input
				placeholder="Login"
				placeholderTextColor={colors.gray}
				keyboardType="email-address"
				selectTextOnFocus
				textContentType="emailAddress"
				autoCapitalize="none"
				autoCompleteType="email"
				error={!!validationErrors["email"]}
				value={email}
				onChangeText={(text) => setEmail(text)}
			>
				<Ionicons
					name="checkmark-circle-sharp"
					size={22}
					color={colors.inputBG}
				/>
			</Input>

			<Input
				placeholder="Senha"
				textContentType="password"
				placeholderTextColor={colors.gray}
				selectTextOnFocus
				secureTextEntry={!showPassword}
				error={!!validationErrors["password"]}
				value={password}
				onChangeText={(text) => setPassword(text)}
			>
				<TouchableWithoutFeedback
					onPress={() => setShowPassword((state) => !state)}
				>
					{showPassword ? (
						<Ionicons
							name="eye-off"
							color={password != "" ? colors.white : colors.gray}
							size={24}
						/>
					) : (
						<Ionicons
							name="eye"
							color={password != "" ? colors.white : colors.gray}
							size={24}
						/>
					)}
				</TouchableWithoutFeedback>
			</Input>

			<Button onPress={handleSignIn}>Login</Button>

			<TouchableWithoutFeedback onPress={() => navigation.navigate("SignUp")}>
				<ParagraphText>Não tem conta? Registrar</ParagraphText>
			</TouchableWithoutFeedback>
		</Container>
	)
}
