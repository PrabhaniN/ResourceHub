import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Title, Portal } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../../styles/global";
import { connect } from "react-redux";
import { getSubjects } from "../../store/actions/subjectActions";
import { sub } from "react-native-reanimated";

class Resources extends Component {
  state = {};

  componentDidMount() {
    this.props.getSubjects();
  }

  render() {
    const { navigation, subjects } = this.props;

    return (
      <ScrollView style={globalStyles.container}>
        <SafeAreaView>
          {/* <Text>Profile Tab</Text> */}
          {subjects &&
            subjects.map((subject) => (
              <Card
                key={subject.id}
                style={styles.subject_card}
                onPress={() => {
                  navigation.navigate("SubjectResourceStack", {
                    screen: "SubjectResources",
                    params: subject,
                  });
                }}
              >
                <Card.Content style={styles.card_details}>
                  <Title
                    style={{ flexGrow: 1 }}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    {subject.name}
                  </Title>
                  <Feather
                    name="chevron-right"
                    size={24}
                    color="black"
                    style={{ marginTop: 3 }}
                  />
                </Card.Content>
              </Card>
            ))}
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  subjects: state.subject.subjects,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getSubjects: () => dispatch(getSubjects()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Resources);

const styles = StyleSheet.create({
  subject_card: {
    flex: 0,
    width: 370,
    borderRadius: 12,
    // borderColor: "#D4D4D4",
    backgroundColor: "#EEE",
    marginBottom: 10,
    alignSelf: "center",
    // height: 70,
  },
  card_details: {
    // flex: 1,
    flexDirection: "row",
  },
  fab: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
