import React from "react"

import {
	createNativeStackNavigator,
	createStackNavigator,
} from "@react-navigation/native-stack"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

const { Navigator, Screen } = createNativeStackNavigator()

export default function Authroutes() {
	return (
		<Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
			<Screen name="SignIn" component={SignIn} />
			<Screen name="SignUp" component={SignUp} />
			{/* <Screen name="SignUp" component={SignUp}/>
            <Screen name="ForgotPassword" component={ForgotPassword}/> */}
		</Navigator>
	)
}
