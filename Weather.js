import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types';

// export default class Weather extends Component {
//   render () {
//     return (
//       <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.container}>
//         <View style = { styles.upper }>
//           <Ionicons color = 'white' size = {130} name = 'ios-rainy' />
//           <Text style = { styles.temp }>35 degree</Text>
//         </View>
//         <View style = { styles.lower }>
//           <Text style = {styles.title} > RAining like a MF</Text>
//           <Text style = {styles.subtitle } > for more info look outside</Text>
//         </View>
//       </LinearGradient>
//     );
//   }
// }

const WeatherCases = {
  Rain : {
    colors : ['#00C6FB','#005BEA'] ,
    title : 'Raining',
    subtitle : 'For more info look outside',
    icon : 'ios-rainy',
  },
  Clear : {
    colors : ['#FEF253','#FF7300'] ,
    title : 'Sunny',
    subtitle : 'For more info look outside',
    icon : 'ios-sunny',
  },
  Thunderstorm : {
    colors : ['#00ECBC','#007ADF'] ,
    title : 'ThunderStorm',
    subtitle : 'For more info look outside',
    icon : 'ios-thunderstorm',
  },

}

Weather = ({temp}) => {
    return (
      <LinearGradient colors={WeatherCases["Clear"].colors} style={styles.container}>
        <View style = { styles.upper }>
          <Ionicons color = 'white' size = {130} name = {WeatherCases["Clear"].icon} />
          <Text style = { styles.temp }>{temp}</Text>
        </View>
        <View style = { styles.lower }>
          <Text style = {styles.title} > {WeatherCases["Clear"].title}</Text>
          <Text style = {styles.subtitle } > {WeatherCases["Clear"].subtitle}</Text>
        </View>
      </LinearGradient>
    );
}

export default Weather;

Weather.propTypes = {
  temp : propTypes.number.isRequired
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  upper : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
    backgroundColor : 'transparent'
  },
  temp : {
    fontSize : 48,
    backgroundColor : "transparent",
    color : "white",
    marginTop : 10
  },

  lower : {
    flex : 1,
    alignItems : 'flex-start',
    justifyContent : 'flex-end',
    paddingLeft : 25
    
  },
  title : {
    fontSize: 38,
    backgroundColor : "transparent",
    color : "white",
    marginBottom :10
  },
  subtitle : {
    fontSize : 24,
    backgroundColor : "transparent",
    color : "white",
    marginBottom :24

  }
});
