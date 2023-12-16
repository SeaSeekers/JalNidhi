import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Dimensions,Image } from 'react-native';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const options = {
  maxHeight: 200,
  maxWidth: 200,
  selectionLimit: 0,
  mediaType: 'photo',
  includeBase64: true,
};
const ComplaintForm = () => {
  const [problemType, setProblemType] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [adharNumber, setAdharNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [image,setImage] = useState('');
  const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'];
  const problemTypes = ['Drainage', 'Logage', 'Others'];

  const handleStateChange = (state) => {
    setSelectedState(state);
    // Simulate fetching cities based on the selected state (replace with your logic)
    const fetchedCities = getCitiesForState(state);
    setCities(fetchedCities);
  };

  const getCitiesForState = (state) => {
    // Replace this with your logic to fetch cities for the selected state
    // For now, returning a static list for demonstration purposes
    return ['City 1', 'City 2', 'City 3', 'City 4'];
  };

  const handleFirstNameChange = (value) => {
    // Allow only alphabets in the first name
    if (/^[A-Za-z]+$/.test(value) || value === '') {
      setFirstName(value);
      setNameError('');
    } else {
      setNameError('Name should not contain any digits or symbols');
    }
  };

  const handleMiddleNameChange = (value) => {
    // Allow only alphabets in the middle name
    if (/^[A-Za-z]+$/.test(value) || value === '') {
      setMiddleName(value);
      setNameError('');
    } else {
      setNameError('Name should not contain any digits or symbols');
    }
  };

  const handleLastNameChange = (value) => {
    // Allow only alphabets in the last name
    if (/^[A-Za-z]+$/.test(value) || value === '') {
      setLastName(value);
      setNameError('');
    } else {
      setNameError('Name should not contain any digits or symbols');
    }
  };

  const handleContactNumberChange = (value) => {
    // Allow only digits in the contact number and limit to 10 digits
    const sanitizedValue = value.replace(/\D/g, ''); // Remove non-digit characters
    if (/^\d{0,10}$/.test(sanitizedValue)) {
      setContactNumber(sanitizedValue);
    }
  };

  const handleAdharNumberChange = (value) => {
    // Allow only digits in the Aadhar number and format it as "xxxx xxxx xxxx"
    const sanitizedValue = value.replace(/\D/g, ''); // Remove non-digit characters
    if (/^\d{0,12}$/.test(sanitizedValue)) {
      setAdharNumber(sanitizedValue.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3'));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>COMPLAINT FORM</Text>
        <FontAwesome5 name="balance-scale" size={24} color="black" />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={handleFirstNameChange}
            placeholder="Enter your first name"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Middle Name:</Text>
          <TextInput
            style={styles.input}
            value={middleName}
            onChangeText={handleMiddleNameChange}
            placeholder="Enter your middle name"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={handleLastNameChange}
            placeholder="Enter your last name"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Type of Problem:</Text>
          <RNPicker
            style={styles.picker}
            selectedValue={problemType}
            onValueChange={(itemValue) => setProblemType(itemValue)}
          >
            <RNPicker.Item label="Select problem type" value="" />
            {problemTypes.map((type, index) => (
              <RNPicker.Item key={index} label={type} value={type} />
            ))}
          </RNPicker>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>State:</Text>
          <RNPicker
            style={styles.picker}
            selectedValue={selectedState}
            onValueChange={handleStateChange}
          >
            <RNPicker.Item label="Select state" value="" />
            {states.map((state, index) => (
              <RNPicker.Item key={index} label={state} value={state} />
            ))}
          </RNPicker>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>City:</Text>
          <RNPicker
            style={[styles.picker, styles.cityPicker]}
            selectedValue={selectedCity}
            onValueChange={(itemValue) => setSelectedCity(itemValue)}
            enabled={selectedState !== ''}
          >
            <RNPicker.Item label="Select city" value="" />
            {cities.map((city, index) => (
              <RNPicker.Item key={index} label={city} value={city} />
            ))}
          </RNPicker>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Address:</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={(value) => setAddress(value)}
            placeholder="Enter your address"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Contact no.:</Text>
          <TextInput
            style={styles.input}
            value={contactNumber}
            onChangeText={handleContactNumberChange}
            placeholder="Enter your contact number"
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Adhar no.:</Text>
          <TextInput
            style={styles.input}
            value={adharNumber}
            onChangeText={handleAdharNumberChange}
            placeholder="Enter your Aadhar number"
            keyboardType="numeric"
            maxLength={14} // Allow 12 digits and 2 spaces
          />
        </View>
        <Text style={styles.errorText}>{nameError}</Text>
        
        <View style={styles.inputRow}>
          <Text style={styles.label}>Select Picture</Text>
          <TouchableOpacity onPress={()=>{
              launchImageLibrary(options,(response)=>{
                setImage(response.assets[0].uri);
              })
          }}>
          <View
            style={[styles.input,{width:Dimensions.get('window').width - 180}]}
          />
          </TouchableOpacity>
        </View>
        {image &&
            <View style={{height:100, width:100,marginBottom:20}}>
            <Image style={{height:100, width:100}} source={{uri:image}}></Image>
        </View>
        }
       
        {/* Add more form fields as needed */}
      </View>
    </ScrollView>
  );
};

export default ComplaintForm;

const styles = {
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  formContainer: {
    flex: 1,
    width: '100%', // Adjust as needed
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    width: '40%', // Adjust as needed
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  picker: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  cityPicker: {
    opacity: 1, // Enable the picker when a state is selected
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
};