import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Screen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá mundo!</Text>
            <Link href='/about'>Ir para sobre</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
    fontWeight: 'bold',
    fontSize: 24,
}
});