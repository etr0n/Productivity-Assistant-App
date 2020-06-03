import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./Colors";
import tempData from "./TempData";

export default class AddListModal extends React.Component {
    
    state = {
        name: "",
        color: colors.darkgreyblue
    };

    createTask = () => {
        const {name, color} = this.state;

        const list = {name, color};

        this.props.addList(list);

        this.setState({name: ""});
        this.props.closeModal();
    };

    renderColors(){
        return this.backgroundColors.map(color => {
            return (
                <TouchableOpacity 
                key={color} 
                style={[styles.colorSelect, {backgroundColor: [0]}]}
                onPress={() => this.setState({ color })} 
                />
             );
        });
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <TouchableOpacity style={{ position: "absolute", top: 40, right: 32 }} onPress={this.props.closeModal}>
                    <AntDesign name="close" size={24} color={colors.black} />
                </TouchableOpacity>

                <View style={{alignSelf: "stretch", marginHorizontal: 32}}>
                    <Text style={styles.title}>CREATE PROJECT</Text>

                    <TextInput 
                    style={[styles.input, {backgroundColor: colors.grey}]}
                    placeholder="PROJECT NAME?" 
                    placeholderTextColor = "#BFBFBF" 
                    onChangeText={text => this.setState({ name: text })} 
                    autoCapitalize="characters"
                    />

                    <TouchableOpacity 
                    style={[styles.create, {backgroundColor: colors.darkgreyblue}]} 
                    onPress={this.createTask}
                    >
                        <Text style={{color: colors.lightGrey, fontWeight: "600", fontSize: 16}}>CREATE</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.greyblue
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: colors.black,
        alignSelf: "center",
        marginBottom: 16
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.black,
        borderRadius: 6,
        height: 50,
        marginTop: 8,
        paddingHorizontal: 16,
        fontSize: 18
    },
    create: {
        marginTop: 24,
        height: 50,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4,
        marginTop: 6
    }
});