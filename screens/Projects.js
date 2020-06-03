import React from "react";
import { StyleSheet, View, TouchableOpacity, FlatList, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "./ForProject/Colors";
import tempData from "./ForProject/TempData";
import TaskList from "./ForProject/TaskList";
import AddListModal from "./ForProject/AddListModal";
import { Text } from "expo-ui-kit";

export default class Projects extends React.Component {
  state = {
    addTaskVisible: false,
    lists: tempData
  };

  toggleAddTaskModal() {
    this.setState({addTaskVisible: !this.state.addTaskVisible});
  }

  renderList = list => {
    return <TaskList list={list} updateList={this.updateList} />;
  };

  addList = list => {
    this.setState({ lists: [...this.state.lists, { ...list, id: this.state.lists.length + 1, tasks: [] }] });
  };

  updateList = list => {
    this.setState({
      lists: this.state.lists.map(item => {
        return item.id === list.id ? list : item;
      })
    });
  };

  render(){
    return (
      <View style={styles.container}>
        <Modal animationType="slide" 
        visible={this.state.addTaskVisible} 
        onRequestClose={() => this.toggleAddTaskModal()}>
          
          <AddListModal closeModal={() => this.toggleAddTaskModal()} addList={this.addList} />
        </Modal>
        <View style={{flexDirection: "row"}}>
          <Text bold h2>PROJECT LIST</Text>
        </View>

        <View style={{marginVertical: 45}} >
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTaskModal()}>
            <AntDesign name="plus" size={26} color={colors.darkgreyblue}/>
           </TouchableOpacity>

           <Text style={styles.add}>ADD LIST</Text>
        </View>

        <View style={{height: 275, paddingLeft: 10}}>
          <FlatList 
            data={this.state.lists} 
            keyExtractor={item => item.name} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            renderItem={({item}) => this.renderList(item)} 
            keyboardShouldPersistTaps="always" 
         /> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: colors.greyblue,
    alignItems: "center",
    justifyContent: "center"
  },
  addList: {
    borderWidth: 3,
    borderColor: colors.black,
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    color: colors.darkgreyblue,
    fontWeight: "600",
    fontSize: 16,
    marginTop: 6,
    fontFamily: "sans-serif-condensed"
  } 
});