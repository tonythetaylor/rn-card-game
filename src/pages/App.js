import React,{useState,useEffect} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, Header, Button } from 'react-native-elements';
import Deck from './Deck';
import DATA from '../../data'
import {db, database} from '../../firebase';
import {doc, getDoc, collection, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc, getDocs} from "firebase/firestore";
import { ref, onValue, set} from "firebase/database";

function App() {
  const [ blogs, setBlogs ] = useState([])
  const [data, setData] = useState([])
  const [rightCounter, setRightCounter] = useState(0)
  const [leftCounter, setLeftCounter] = useState(0)

  // get all jokes from cards collection
  const getData = async ()=>{
    try {
      const querySnap = query(collection(db, "cards"))
      onSnapshot(querySnap, (querySnapshot) => {
        setData(querySnapshot.docs.map(doc => (
          doc.data()
        )))
      })
    } catch (err) {
      console.log(err)
    }
  }

  // get data from real time database
  const getYomommaJokes = async () => {
    const starCountRef = ref(database, 'yomomma/');
    onValue(starCountRef, (snapshot) => {
      const jokesData = snapshot.val();
      setData(jokesData)
      // console.log(data)
    });
  }

  useEffect(() => {
    // gets data from DB on load
    // getData()
    getYomommaJokes()
  }, [])

  const resetDeck = () => {
      getData()
      setRightCounter(0)
      setLeftCounter(0)
    }

 const  updateCounters = (direction /*, item */) => {
    if (direction === 'right') {
      return setRightCounter(rightCounter + 1);
    }
    return setLeftCounter(leftCounter + 1 );
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
    if (rightCounter + leftCounter == 0) {
      <View style={styles.noMoreCardsContainer}>
      </View>
    } else {
    return (
      <View style={styles.noMoreCardsContainer}>
        <Text style={[styles.text, styles.noMoreCardsText]}>All Done!</Text>
        <Button onPress={resetDeck} color='#5f9ea0' title="Again!" titleStyle={styles.text} />
      </View>
    );
    }
  }

  const renderCounters = () => {
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
        backgroundColor="#5f9ea0" 
        centerComponent={{ 
          text: 'Watchu Tryna Say', 
          style: [styles.text, { color: '#fff' } ]}} 
          />
        <View style={styles.deckView}>
          <Deck
            data={data}
            renderCard={renderCard}
            renderNoMoreCards={renderNoMoreCards}
            resetDeck={resetDeck}
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