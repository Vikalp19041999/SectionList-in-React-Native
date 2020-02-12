import React, { Component } from 'react'
import { View, StyleSheet, Text, SectionList } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={
            [
              {
                Production: 'Marvel Cinematics',
                data:['Avengers Endgame', 'Captain Marvel', 'Avengers-Age of Ultron'],
                Maalik:'Walt Disney'
              },
              {
                Production: 'Detective Comics',
                data:['Joker 1', 'Joker 2', 'Batman'],
                Maalik:' Malcolm Wheeler-Nicholson'
              },
              {
                Production: 'Fox Star Studios',
                data:['MS Dhoni-The Untold Story', 'Sanju', 'Chhichore'],
                Maalik: 'Sajid Nadiadwala'
              }
            ]
          }
          renderItem={({ item }) => <Text>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.header}>{section.Production}</Text>}
          renderSectionFooter={({ section }) => <Text style={styles.footer}>{section.Maalik}</Text>} />
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    color: 'black',
    fontSize: 20
  },
  footer: {
    color: 'black',
    fontSize: 15
  }
})