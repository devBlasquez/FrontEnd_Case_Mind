import React, { createContext, useState, useEffect, useCallback } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Toast from "react-native-toast-message"

import { api } from "../services/api"

export const AuthContext = createContext({
	user: null,
	loading: false,
	signIn({ email, password }) {},
	signOut() {},
})

export function AuthProvider({ children }) {
	const [user, setUser] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function loadStorageData() {
			const [storagedUser, storagedToken] = await AsyncStorage.multiGet([
				"@Case_Mind:user",
				"@Case_Mind:token",
			])

			if (storagedToken[1] && storagedUser[1]) {
				api.defaults.headers.authorization =
					"Bearer " + JSON.parse(storagedToken[1])
				setUser(JSON.parse(storagedUser[1]))
			}

			setLoading(false)
		}

		loadStorageData()
	}, [])

	const signIn = useCallback(async ({ email, password }) => {
		const response = await api.post("/sessions", { email, password })
		api.defaults.headers.authorization = "Bearer " + response.data.token

		setUser(response.data.user)

		try {
			await AsyncStorage.setItem(
				"@Case_Mind:user",
				JSON.stringify(response.data.user)
			)
			await AsyncStorage.setItem("@Case_Mind:token", response.data.token)
		} catch {
			Toast.show({
				type: "error",
				position: "bottom",
				text1: "Erro",
				text2:
					"Não foi possível salvar alguma informação, tente relogar no app",
			})
		}
		return response.data.user
	}, [])

	const signOut = useCallback(async () => {
		try {
			await AsyncStorage.removeItem("@Case_Mind:user")
			await AsyncStorage.removeItem("@Case_Mind:token")

			setUser()
		} catch {
			Toast.show({
				type: "error",
				position: "bottom",
				text1: "Erro",
				text2: "Não foi possível remover alguma informação",
			})
		}
	})

	return (
		<AuthContext.Provider value={{ user, loading, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}
