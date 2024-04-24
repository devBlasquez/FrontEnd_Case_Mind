import React, { useState } from "react"
import { TouchableWithoutFeedback } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import Toast from "react-native-toast-message"
import * as Yup from "yup"

import { Container, ParagraphText } from "./styles"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { api } from "../../services/api.js"
import { colors } from "../../styles/colors"

export default function SignUp() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [showPassword, setShowPassword] = useState(false)
	const [showPasswordConfirmation, setShowPasswordConfirmation] =
		useState(false)
	const [validationErrors, setValidationErrors] = useState({})

	const navigation = useNavigation()

	async function handleSaveRegisters() {
		try {
			setValidationErrors({})
			const schema = Yup.object().shape({
				name: Yup.string().required("Nome Obrigatório"),
				email: Yup.string()
					.email("O email precisa ser válido")
					.required("Email Obrigatório"),
				password: Yup.string()
					.required("Senha obrigatória")
					.min(6, "A senha precisa ter no mínimo 6 caracteres"),
				confirmPassword: Yup.string().oneOf(
					[Yup.ref("password"), null],
					"As senhas precisam ser iguais"
				),
			})

			let data = { name, email, password, confirmPassword }
			await schema.validate(data, { abortEarly: false })
			await api.post("/users", data)
			Toast.show({
				type: "success",
				text1: "Sucesso",
				text2: "Cadastro Realizado",
			})
			navigation.goBack()
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				err.inner.forEach((error) => {
					setValidationErrors((state) => {
						return {
							...state,
							[error.path || ""]: error.message,
						}
					})
				})
				return Toast.show({
					type: "error",
					text1: "Erro",
					text2: err.inner[0].message,
				})
			}

			Toast.show({
				type: "error",
				text1: "Erro",
				text2: "Não foi possível realizar o cadastro, tente novamente",
			})
		}
	}
	return (
		<Container>
			<Input
				placeholder="Nome"
				placeholderTextColor={colors.gray}
				selectTextOnFocus
				textContentType="name"
				autoCapitalize="words"
				autoComplete="name"
				error={!!validationErrors["name"]}
				value={name}
				onChangeText={(text) => setName(text)}
			/>
			<Input
				placeholder="E-mail"
				placeholderTextColor={colors.gray}
				keyboardType="email-address"
				selectTextOnFocus
				textContentType="emailAddress"
				autoCapitalize="none"
				autoComplete="email"
				error={!!validationErrors["email"]}
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>

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

			<Input
				placeholder="Confirmar Senha"
				textContentType="password"
				placeholderTextColor={colors.gray}
				selectTextOnFocus
				secureTextEntry={!showPasswordConfirmation}
				error={!!validationErrors["confirmPassword"]}
				value={confirmPassword}
				onChangeText={(text) => setConfirmPassword(text)}
			>
				<TouchableWithoutFeedback
					onPress={() => setShowPasswordConfirmation((state) => !state)}
				>
					{showPasswordConfirmation ? (
						<Ionicons
							name="eye-off"
							color={confirmPassword != "" ? colors.white : colors.gray}
							size={24}
						/>
					) : (
						<Ionicons
							name="eye"
							color={confirmPassword != "" ? colors.white : colors.gray}
							size={24}
						/>
					)}
				</TouchableWithoutFeedback>
			</Input>

			<Button onPress={handleSaveRegisters}>Cadastrar</Button>

			<TouchableWithoutFeedback onPress={() => navigation.navigate("SignUp")}>
				<ParagraphText>Já possui uma conta? Entrar</ParagraphText>
			</TouchableWithoutFeedback>
		</Container>
	)
}
