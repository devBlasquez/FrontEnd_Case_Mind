import React from "react"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

// import Home from "../pages/Home"
// import Profile from "../pages/Profiles"

const { Navigator, Screen } = createNativeStackNavigator()

export default function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Home" component={Home} />
		</Navigator>
	)
}
