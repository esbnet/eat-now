import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../../components/Themed";

export default function Page() {
  const [name, setName] = React.useState("");
  const [dateOfBirth, setdateOfBirth] = React.useState("");
  const [breed, setBreed] = React.useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Add new pet</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />

        <TextInput
          style={styles.input}
          placeholder="nome"
          onChangeText={setName}
          value={name}
        />

        <TextInput
          style={styles.input}
          placeholder="raça"
          onChangeText={setBreed}
          value={breed}
        />

        <TextInput
          style={styles.input}
          onChangeText={setdateOfBirth}
          value={dateOfBirth}
          placeholder="data de nacimento"
          keyboardType="numeric"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    color: "black",
    placeholderTextColor: "grey",
  },
});
