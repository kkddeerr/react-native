import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from './Weather';

const API_KEY = '02e9ed34ea5e77eb77c2cc8daa34ab31';

export default class App extends Component {

  state = {
    isLoaded: true,
    error : null,
    temperature : 289.61,
    name : null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this._getWeather(position.coords.latitude, position.coords.longitude)
    },
    (error) => {
      //console.log(error)
      this.setState({
        error : error
      })
    });

  }
  _getWeather = ( lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&addid=02e9ed34ea5e77eb77c2cc8daa34ab31`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({ 
        //temperature : json.main.temp,
        //name : json.weather[0].main,
        //temperature : 35,
        isLoaded : true
      })
    })
  } 
  

  render () {
    const {isLoaded, error,temperature } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden = { true } />
        {isLoaded
          ? <Weather temp = {Math.floor(temperature - 273.15) } />
          : <View style={styles.loading}>
              <Text style={styles.loadingText}> Getting the Weather</Text>
              { error ? <Text style = {styles.errorText}>{error}</Text> : null}
            </View>}

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,
  },
  errorText : {
    color : 'red',
    backgroundColor : 'transparent'
  },
});
