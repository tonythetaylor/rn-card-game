import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, Header, Button } from 'react-native-elements';
import Deck from './Deck';
import DATA from '../../data'

class App extends React.Component {
  state = {
    data: DATA,
    rightCounter: 0,
    leftCounter: 0
  };

  resetDeck() {
    this.setState({ 
      data: [...DATA]});
      this.setState({rightCounter: 0})
      this.setState({leftCounter: 0})
    }

  updateCounters(direction /*, item */) {
    if (direction === 'right') {
      return this.setState({ rightCounter: this.state.rightCounter + 1 });
    }
    return this.setState({ leftCounter: this.state.leftCounter + 1 });
  }

  renderCard(item) {
    // return (
    //   <Card
    //     key={item.id}
    //     image={item.uri}
    //     containerStyle={{ borderRadius: 10, height: 650 }}
    //     imageWrapperStyle={{ borderTopStartRadius: 10, borderTopEndRadius: 10, overflow: 'hidden' }}
    //   >
    //     <Text style={styles.text}>{item.text}</Text>
    //   </Card>
    // );
  }

  renderNoMoreCards() {
    return (
      <View style={styles.noMoreCardsContainer}>
        <Text style={[styles.text, styles.noMoreCardsText]}>All Done!</Text>
        <Button onPress={this.resetDeck} color='#5f9ea0' title="Again!" titleStyle={styles.text} />
      </View>
    );
  }

  renderCounters() {
    return (
      <View style={styles.countersContainer}>
        <View style={styles.counterView}>
          <Text style={styles.text}>{this.state.leftCounter}</Text>
        </View>
        <View style={styles.counterView}>
          <Text style={styles.text}>{this.state.rightCounter}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header 
        backgroundColor="#5f9ea0" 
        centerComponent={{ 
          text: 'Relationship Rules', 
          style: [styles.text, { color: '#fff' } ]}} 
          />
        <View style={styles.deckView}>
          <Deck
            data={this.state.data}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
            resetDeck={this.resetDeck.bind(this)}
            onSwipeRight={this.updateCounters.bind(this, 'right')}
            onSwipeLeft={this.updateCounters.bind(this, 'left')}
          />
        </View>
        {this.renderCounters()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  deckView: {
    height: 700,
    zIndex: 1
  },
  countersContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
  },
  counterView: {
    width: 80,
    height: 80,
    marginVertical: 10,
    marginHorizontal: 50,
    borderWidth: 8,
    borderRadius: 50,
    borderColor: '#5f9ea0',
    alignItems: 'center',
    justifyContent: 'center', 
    bottom: 0
  },
  noMoreCardsContainer: { alignItems: 'center' },
  noMoreCardsText: {
    fontSize: 20,
    margin: 50
  },
  text: {
    fontFamily: 'proxima-soft-bold'
  }
});

export default App;
