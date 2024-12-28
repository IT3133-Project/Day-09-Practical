import { StyleSheet, View } from 'react-native';
import { Text, Divider, TextInput } from 'react-native-paper';
import Home from './Home';


export default function ContactUs() {
    return (
        <>
            <View style={styles.header}>
                <Text variant="headlineLarge">Contact Us</Text>
                <Divider />
            </View>
            <View style={styles.body}>
                <View style={styles.input}>
                    <TextInput label="Name" mode='outlined' />
                </View>
                <View style={styles.input}>
                    <TextInput label="Email" mode='outlined' keyboardType='email-address'/>
                </View>
                <View style={styles.input}>
                    <TextInput label="Phone Number" mode='outlined' keyboardType='phone-pad'/>
                </View>
                <View style={styles.input}>
                    <TextInput label="Message" mode='outlined' multiline numberOfLines={5}/>
                </View>
            </View>
            <View style={styles.footer}>
                <Text>MyApp © 2024</Text>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    header: {
        flex: 3,
        width: "100%",
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
    },
    body: {
        flex: 5,
        width: "100%",
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
    },
    input: {
        padding: 5,
        marginBottom: 5,

    }


});