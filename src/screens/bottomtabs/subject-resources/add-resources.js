import React, { Component } from "react";
import { Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { createResource } from "../../../store/actions/resourceAction";
import { connect } from "react-redux";

import { globalStyles } from "../../../../styles/global";

class AddResources extends Component {
  state = {
    title: "",
    content: "",
  };

  render() {
    const { id } = this.props.route.params;

    return (
      <ScrollView style={globalStyles.container}>
        <SafeAreaView>
          <Text style={styles.title}>Add Resources</Text>
          <Text
            style={{
              fontFamily: "opensans-regular",
              alignSelf: "flex-start",
              // marginLeft: 10,
              marginBottom: 5,
            }}
          >
            Title
          </Text>
          <TextInput
            style={styles.form_field}
            placeholder="Ex: Intro to database"
            onChangeText={(text) => this.onTitleChange(text)}
            // value={value}
          />
          <Text
            style={{
              fontFamily: "opensans-regular",
              alignSelf: "flex-start",
              // marginLeft: 10,
              marginBottom: 5,
            }}
          >
            Description
          </Text>
          <TextInput
            style={styles.form_field}
            placeholder="Type here"
            onChangeText={(text) => this.onContentChange(text)}
            // value={value}
          />
          <Text
            style={{
              fontFamily: "opensans-regular",
              alignSelf: "flex-start",
              // marginLeft: 10,
              marginBottom: 5,
            }}
          >
            Add file
          </Text>
          <TextInput
            style={styles.file_input}
            placeholder="Upload or drop here"
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
          />
          <Button
            title="Add"
            onPress={() => this.props.createResource(id, this.state)}
          ></Button>
        </SafeAreaView>
      </ScrollView>
    );
  }

  onTitleChange = (value) => {
    this.setState({
      title: value,
    });
  };

  onContentChange = (value) => {
    this.setState({
      content: value,
    });
  };
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    createResource: (id, newResource) =>
      dispatch(createResource(id, newResource)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddResources);

const styles = StyleSheet.create({
  title: {
    fontFamily: "ubuntu-medium",
    fontSize: 22,
    marginBottom: 20,
  },
  form_field: {
    flex: 0,
    alignSelf: "center",
    height: 40,
    width: 370,
    paddingHorizontal: 12,
    borderColor: "#D4D4D4",
    borderRadius: 6,
    borderWidth: 1,
    fontFamily: "opensans-regular",
    marginBottom: 20,
  },
  file_input: {
    flex: 0,
    alignSelf: "center",
    height: 100,
    width: 370,
    paddingHorizontal: 12,
    borderColor: "#D4D4D4",
    borderRadius: 6,
    borderWidth: 1,
    fontFamily: "opensans-regular",
    marginBottom: 20,
  },
});
