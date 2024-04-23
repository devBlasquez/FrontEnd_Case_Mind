import React, { useEffect, useState, useCallback, useLayoutEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import * as SplashScreen from "expo-splash-screen"
import Toast from "react-native-toast-message"

import {
	useFonts,
	DMSans_400Regular,
	DMSans_500Medium,
	DMSans_700Bold,
} from "@expo-google-fonts/dm-sans"

import {
	WorkSans_400Regular,
	WorkSans_700Bold,
} from "@expo-google-fonts/work-sans"

import { AuthProvider } from "./src/contexts/AuthContext"

import Routes from "./src/routes"

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [fontsLoaded, fontsError] = useFonts({
		DMSans_400Regular,
		DMSans_500Medium,
		DMSans_700Bold,
		WorkSans_400Regular,
		WorkSans_700Bold,
	})

	useLayoutEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return null
	}

	return (
		<AuthProvider>
			<NavigationContainer>
				<Routes />
				<Toast />
			</NavigationContainer>
		</AuthProvider>
	)
}
