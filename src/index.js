import React from 'react';
import { registerRootComponent } from 'expo';
import * as Font from 'expo-font'
import App from './pages/App';
import './config/StatusBarConfig';

class Main extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'proxima-soft-bold': require('../assets/fonts/ProximaNova-Bold.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) return null;
    return <App />;
  }
}

export default registerRootComponent(Main);
