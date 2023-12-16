//notification.js
import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';


export default function NotificationScreen() {
  const [isEnabled, setIsEnabled] = useState({
    newFeatures: true,
    communityUpdates: true,
    membershipPerks: true,
    alertFloods: true,
    alertWaterLogging: true,
    complaintTrack: false,
  });
  
  
  const toggleSwitch = (name) => {
    setIsEnabled({ ...isEnabled, [name]: !isEnabled[name] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NOTIFICATIONS</Text>
      <View style={styles.switchContainer}>
        <Text>NEW FEATURES</Text>
        <Switch
          onValueChange={() => toggleSwitch('newFeatures')}
          value={isEnabled.newFeatures}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>COMMUNITY UPDATES</Text>
        <Switch
          onValueChange={() => toggleSwitch('communityUpdates')}
          value={isEnabled.communityUpdates}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>MEMBERSHIP PERKS</Text>
        <Switch
          onValueChange={() => toggleSwitch('membershipPerks')}
          value={isEnabled.membershipPerks}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>ALERT ME ABOUT FLOODS NEAR MY AREA</Text>
        <Switch
          onValueChange={() => toggleSwitch('alertFloods')}
          value={isEnabled.alertFloods}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>ALERT ME ABOUT WATER LOGGING NEAR MY AREA</Text>
        <Switch
          onValueChange={() => toggleSwitch('alertWaterLogging')}
          value={isEnabled.alertWaterLogging}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>COMPLAINT TRACK</Text>
        <Switch
          onValueChange={() => toggleSwitch('complaintTrack')}
          value={isEnabled.complaintTrack}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
