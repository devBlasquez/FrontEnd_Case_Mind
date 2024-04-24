import React, { Text } from "react"
import { View, ActivityIndicator, Platform } from "react-native"

import Authroutes from "./auth.routes"
import AppRoutes from "./app.routes"

import { useAuth } from "../hooks/useAuth.js"
import { colors } from "../styles/colors"

export default function routes() {
	const { user, loading } = useAuth()

	if (loading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator
					size={Platform.OS === "android" ? 100 : "large"}
					color={colors.purple}
				/>
			</View>
		)
	}
	return user ? <AppRoutes /> : <Authroutes />
}
