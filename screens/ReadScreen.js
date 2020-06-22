import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { ListItem, Header } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'

export default class Readscreen extends Component {
  constructor() {
    super()
    this.state = {
      storyList: []
    }
    this.storyRef = null
  }

  getstoryList = () => {

    console.log("#1", this.state.storyList)
    this.storyRef = db.collection("Stories")
      .onSnapshot((snapshot) => {
        var storyList = snapshot.docs.map(document => document.data());
        this.setState({
          storyList: storyList
        });
      })
    console.log("#2", this.state.storyList)
  }

  componentDidMount() {
    this.getstoryList()
  }

  componentWillUnmount() {
    this.storyRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.name + " has shared a story "}
        subtitle={item.storyName + " : " + item.story}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        bottomDivider
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Header centerComponent={{
          text: 'Read',
          style: { color: 'white', fontSize: 25, marginBottom: 20 },
        }}
          containerStyle={{
            backgroundColor: '#3d7bf9',
            justifyContent: 'space-around',
          }} />
        <View style={{ flex: 1 }}>
          {
            this.state.storyList.length === 0
              ? (
                <View style={styles.subContainer}>
                  <Text style={{ fontSize: 20 }}>All Stories</Text>
                </View>
              )
              : (
                <FlatList
                  keyExtractor={this.keyExtractor}
                  data={this.state.storyList}
                  renderItem={this.renderItem}
                />
              )
          }
        </View>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 2,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});