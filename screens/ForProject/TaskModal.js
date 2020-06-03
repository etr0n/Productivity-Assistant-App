import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity,
     FlatList, KeyboardAvoidingView, TextInput, Keyboard } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "./Colors";

export default class TaskModal extends React.Component {
    state = {
        newTask: ""
    };

    toggleTaskCompleted = index => {
        let list = this.props.list;
        list.tasks[index].completed = !list.tasks[index].completed;

        this.props.updateList(list);
    };

    addTask = () => {
        let list = this.props.list;
        list.tasks.push({ title: this.state.newTask, completed: false });

        this.props.updateList(list);
        this.setState({ newTask: "" })

        Keyboard.dismiss();
    }

    renderTask = (task, index) => {
        return (
            <View style={styles.taskContainer}>
                <TouchableOpacity onPress={() => this.toggleTaskCompleted(index)}>
                    <Ionicons 
                    name={task.completed ? "ios-square" : "ios-square-outline"} 
                    size={26} 
                    color={colors.darkgreyblue} 
                    style={{ width: 32 }} />
                </TouchableOpacity>
                <Text 
                    style={[
                        styles.task,
                        {
                            textDecorationLine: task.completed ? "line-through" : "none",
                            color: task.completed ? colors.darkgreyblue : colors.black
                        }
                    ]}
                >
                    {task.title}
                </Text>
            </View>
        );
    };

    render() {
        const list = this.props.list;

        const taskCount = list.tasks.length;
        const completedCount = list.tasks.filter(task => task.completed).length;

        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                <SafeAreaView style={styles.container}>
                    <TouchableOpacity 
                    style={{position: "absolute", top: 64, right: 32, zIndex:10}} 
                    onPress={this.props.closeModal} 
                    >
                        
                        <AntDesign name="close" size={24} color={colors.black} />
                    </TouchableOpacity>

                    <View style={[styles.section, styles.header, { borderBottomColor: list.color }]}>
                        <View>
                            <Text style={styles.title}>{list.name}</Text>
                            <Text style={styles.taskCount}>
                                {completedCount} OF {taskCount} TASKS
                            </Text>
                        </View>
                    </View>

                    <View style={[styles.section, {flex: 3}]}>
                        <FlatList 
                        data={list.tasks} 
                        renderItem={({ item, index }) => this.renderTask(item, index)} 
                        keyExtractor={item => item.title} 
                        contentContainerStyle={{ paddingHorizontal:32, paddingVertical:64 }} 
                        showsVerticalScrollIndicator={false} 
                        fontFamily={"sans-serif-condensed"} 
                        />
                    </View>

                    <View style={[styles.section, styles.footer]}>
                        <TextInput 
                        style={[styles.input, {borderColor: list.color}]} 
                        autoCapitalize="characters" 
                        onChangeText={text => this.setState({ newTask: text })} 
                        value={this.state.newTask} 
                        />
                        <TouchableOpacity 
                        style={[styles.addTask, {backgroundColor: list.color}]} 
                        onPress={() => this.addTask()} 
                        >
                            <AntDesign name="plus" size={20} color={colors.lightGrey} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
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
    section: {
        flex: 1,
        alignSelf: "stretch"
    },
    header: {
        justifyContent: "flex-end",
        marginLeft: 64,
        borderBottomWidth: 5,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: "800",
        color: colors.black
    },
    taskCount: {
        marginTop: 4,
        marginBottom: 16,
        color: colors.darkgreyblue,
        fontFamily: "sans-serif-condensed"
    },
    footer: {
        paddingHorizontal: 32,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        flex: 1,
        height: 50,
        borderRadius: 6,
        marginRight: 8,
        paddingHorizontal: 20,
        backgroundColor: "#3D485E"
    },
    addTask: {
        borderRadius: 2,
        padding: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    taskContainer: {
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    task: {
        color: colors.black,
        fontWeight: "600",
        fontSize: 16,
        fontFamily: "sans-serif-condensed"
    }
})