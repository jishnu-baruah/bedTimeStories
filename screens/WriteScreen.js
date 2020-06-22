import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import { Header } from 'react-native-elements';

import firebase from 'firebase';
import db from '../config.js';
import { color } from 'react-native-reanimated';

export default class WriteScreen extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      story: "",
      storyName: "",
    }
  }
  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  addstory = () => {
    var randomRequestId = this.createUniqueId();
    //console.log(this.state.name)


    db.collection("Stories").doc(randomRequestId).set({
      //  db.collection("Stories").add({
      "name": this.state.name,
      "story": this.state.story,
      "storyName": this.state.storyName,
    })
      .then(function () {
        Alert.alert("story successfully added!");
      })
      .catch(function (error) {
        Alert.alert("Error adding story: ", error.message);
      });
    this.setState({
      name: "",
      story: "",
      storyName: "",
    })

  }

  showAlert = () => {
    Alert.alert("Submit Button is pressed")
  }


  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <Header centerComponent={{
            text: 'Share',
            style: { color: 'white', fontSize: 25, marginBottom: 20 },
          }}
            containerStyle={{
              backgroundColor: '#3d7bf9',
              justifyContent: 'space-around',
            }} />
          <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
          }}>
            <View>
              <Text>Name :</Text>
              <TextInput
                style={styles.nameInputBox}
                placeholder="your name"
                onChangeText={text => this.setState({ name: text })}
                value={this.state.name}
              /></View>

            <View></View>
            <View>
              <Text>Story name :</Text>
              <TextInput
                style={styles.nameInputBox}
                placeholder="name of your story"
                onChangeText={text => this.setState({ storyName: text })}
                value={this.state.storyName}
              /></View>
            <View>

              <Text>Add a story :</Text>
              <TextInput
                style={styles.storyInputBox}
                placeholder="your story"
                multiline={true}
                onChangeText={text => this.setState({ story: text })}
                value={this.state.story}
              />
            </View>
            <View>

              <TouchableOpacity
                style={styles.submitButton}

                onPress={() => {
                  this.addstory();

                }}>


                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 200
  },

  storyInputBox: {
    width: 250,
    height: 300,
    borderWidth: 1.5,

    fontSize: 20,
    textAlign: "center",
    borderRadius: 20,
    borderColor: '#3d7bf9',
  },
  nameInputBox: {
    width: 250,
    height: 50,
    borderWidth: 1.5,

    fontSize: 20,
    textAlign: "center",
    borderRadius: 20,
    borderColor: '#3d7bf9',
  },

  submitButton: {
    width: 150,
    height: 50,
    margin: 20,

    borderRadius: 20,
    backgroundColor: "#3d7bf9"

  },
  submitButtonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',

  },
});
