import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, Header, Button } from 'react-native-elements';
import Deck from './Deck';
import DATA from '../../data'

export default function App() {
  const [data, setData] = useState(DATA)
  const [rightCounter, setRightCounter] = useState(0)
  const [leftCounter, setLeftCounter] = useState(0)

  state = {
    data: DATA,
    rightCounter: 0,
    leftCounter: 0
  };

  const resetDeck = () => {
    setData({data: [...DATA]})
    setRightCounter({rightCounter: 0})
    setLeftCounter({leftCounter: 0})
    // this.setState({ 
    //   data: [...DATA]});
    //   this.setState({rightCounter: 0})
    //   this.setState({leftCounter: 0})
    }

  const updateCounters = (direction /*, item */) => {
    if (direction === 'right') {
      return setRightCounter(rightCounter + 1);
    }
    return (
      setLeftCounter( leftCounter + 1 )

    ) 
  }

  const changeCounterColor = () => {
    const interval = setInterval(() => {
      leftCounter ? styles.counterView : styles.counterView
    }, 2000);
    return () => clearInterval(interval)
  }
  const renderCard = (item) => {
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

  const renderNoMoreCards = () => {
    return (
      <View style={styles.noMoreCardsContainer}>
        <Text style={[styles.text, styles.noMoreCardsText]}>All Done!</Text>
        <Button onPress={this.resetDeck} color='#5f9ea0' title="Again!" titleStyle={styles.text} />
      </View>
    );
  }

  renderCounters = () => {
    return (
      <View style={styles.countersContainer}>
        <View style={styles.counterView}>
          <Text style={styles.text}>{leftCounter}</Text>
        </View>
        <View style={styles.counterView}>
          <Text style={styles.text}>{rightCounter}</Text>
        </View>
      </View>
    );
  }

    return (
      <View style={styles.container}>
        <Header 
        backgroundColor="#000" 
        centerComponent={{ 
          text: 'Yo Mama Jokes', 
          style: [styles.text, { color: '#fff' } ]}} 
          />
        <View style={styles.deckView}>
          <Deck
            data={data}
            renderCard={renderCard()}
            renderNoMoreCards={renderNoMoreCards()}
            resetDeck={resetDeck.bind(this)}
            onSwipeRight={updateCounters.bind(this, 'right')}
            onSwipeLeft={updateCounters.bind(this, 'left')}
          />
        </View>
        {renderCounters()}
      </View>
    );
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
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center', 
    bottom: 0
  },
  counterViewLeft: {
    width: 80,
    height: 80,
    marginVertical: 10,
    marginHorizontal: 50,
    borderWidth: 8,
    borderRadius: 50,
    borderColor: 'red',
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

