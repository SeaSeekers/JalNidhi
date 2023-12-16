//alertmap.js
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 20.5937, // Center of India
    longitude: 78.9629,
    latitudeDelta: 30,
    longitudeDelta: 30,
  });

  const [errorMsg, setErrMsg] = useState('');

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync({
      enableHighAccuracy: true,
    });
    if (status !== 'granted') {
      setErrMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title="marker" />
      </MapView>
      <View style={styles.overlayBox}>
        <Text style={styles.overlayText}>Your content here</Text>
      </View>
      <Button title="Get Location" onPress={userLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '70%', // Adjust the height of the map as needed
  },
  overlayBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%', // Adjust the height of the overlay box as needed
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust the background color and opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 20,
    color: 'black',
  },
});