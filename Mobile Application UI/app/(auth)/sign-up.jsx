import React, { useState } from 'react';
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Picker,ScrollView, Dimensions,Alert, Image,Button,
  TouchableOpacity
 } from "react-native";

import  images  from "../../constant/images.js";
import  CustomButton  from "../../components/CustomButton.jsx";
import  FormField  from "../../components/FormField.jsx";
import { useSession } from '../../context/ctx.jsx';
import {getLocation} from '../../util/permission'
import * as Location from 'expo-location';
import AccordionItem from '../../components/Accordion.jsx';
// import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import GenderPicker from '../../components/GenderPicker.jsx';



const SignUp = () => {
    const router = useRouter();
    const { signUp } = useSession();
    const [isSubmitting, setSubmitting] = useState(false);
    const [selectedGender, setSelectedGender] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [form, setForm] = useState({
      name: "",
      phone: "",
      email: "",
      password: "",
      location:"",
      gender:"Female",
      dob:new Date(),
    });
    console.log(form);
    const submit = async () => {
        if (form.email === "" || form.password === "" || form.name === "" || form.phone === "" || form.emergencyContact === "") {
          Alert.alert("Error", "Please fill in all fields");
        }
        form.location = await getLocation(Location);
        form.emergencyContact = contacts;
        setSubmitting(true);
        try {
          await signUp(form);
          Alert.alert("Success", "User signed in successfully");
          router.replace("/home");
        } catch (error) {
          // Get the error message from the error object
          console.log(error)
          Alert.alert("Error", error.message);
        } finally {
          setSubmitting(false);
        }
    };
    let [contacts,setContacts] = useState([{name:"John Doe",phone:"0123456789"}]);
    let [emergencyContact,setEmergencyContact] = useState({name:"",phone:""});

    const addContact = (e)=>{
      // Push the new contact to the contacts array
      console.log(contacts);
      setContacts([...contacts,{name:emergencyContact.name,phone:emergencyContact.phone}]);

      // Reset the emergency contact
      setEmergencyContact({name:"",phone:""});
      Alert.alert("Success", `${emergencyContact.name}'s added successfully`);      
      
    }
    
    return (
        // Use tailwind css for styling
        <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign up to Aora
          </Text>
          {/* Name field */}
            <FormField
                title="Name"
                value={form.name}
                handleChangeText={(e) => setForm({ ...form, name: e })}
                otherStyles="mt-7"
            />
            {/* Emergency contact field */}

            {/* Phone field */}
            <FormField
                title="Phone"
                value={form.phone}
                handleChangeText={(e) => setForm({ ...form, phone: e })}
                otherStyles="mt-7"
                keyboardType="phone-pad"
            />
            {/* Emergency Contact */}
            <AccordionItem
                title="Emergency Contacts"
                label={"Note: Can add multiple contacts"}
            >
              <FormField
                title="Name"
                value={emergencyContact.name}
                handleChangeText={(e) => setEmergencyContact({ ...emergencyContact, name: e })}
                otherStyles="mt-7"
            /> 
            <FormField
                title="Emergency Contact"
                value={emergencyContact.phone}
                handleChangeText={(e) => setEmergencyContact({ ...emergencyContact, phone: e })}
                otherStyles="mt-7"
                keyboardType="phone-pad"
            /> 
            <CustomButton
            title={"Add Contact"}
            handlePress={addContact}
            containerStyles="mt-7"
            />
              </AccordionItem>
            <View className="mt-4">
                {/* Gender and DOB picker */}
                <Text className="text-lg text-gray-700 font-pregular">Gender</Text>
                <GenderPicker selectedGender={form.gender}  setForm={setForm} form={form} />

                <Text className="text-lg text-gray-700 font-pregular my-3">Date of Birth</Text>
                <TouchableOpacity
                    className="w-full h-10 px-4 bg-secondary rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center"
                    onPress={() => setShowDatePicker(true)}
                >
                    <Text className="flex-1 text-black font-psemibold text-base">
                        {form.dob.toDateString()}
                    </Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        value={form.dob}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            const currentDate = selectedDate || form.dob;
                            setShowDatePicker();
                            setForm({ ...form, dob: currentDate });
                        }}
                    />
                )}
            </View>

            {/* Email field */}
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Signin
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    );
}

export default SignUp;