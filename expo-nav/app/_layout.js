import { Stack } from "expo-router";

export default function RootLayout() {
    return (
            <Stack screenOptions={{
                headerShown: false, 
                headerStyle: {
                backgroundcolor: '#3b5998',
            },
            headerTintColor: '#fff',
            headerTintStyle: {
                fontWeight: 'bold',
            },
                   
            }}>
            <Stack.Screen name="index" options={{ title: 'Home' }}/>
        </Stack>
    )
}