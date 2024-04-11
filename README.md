# FirebaseDemo

FirebaseDemo is a sample that shows basic usage of the `FirebaseArduino` API.

## Software setup

1. Install [Arduino 1.6.9](https://www.arduino.cc/en/Main/Software)
1. Install [Arduino ESP8266 core](https://github.com/esp8266/Arduino#installing-with-boards-manager)
1. Download [FirebaseArduino library](https://github.com/googlesamples/firebase-arduino/archive/master.zip)
1. Start Arduino
1. Click `Sketch > Include Library > Add .ZIP Library...`
1. Choose `firebase-arduino-master.zip` downloaded in step `3.`

## Configuration

1. Start Arduino
1. Open `File > Examples > FirebaseArduino > FirebaseRoom_ESP8266`
1. In `FirebaseRoom_ESP8266`: Replace `WIFI_SSID` and `WIFI_PASSWORD` with WiFi credentials
1. Go to https://firebase.google.com/console/ and create a new Firebase Project
1. Go to `Database`
1. Copy the `Database hostname` (Database URL without `https://` and trailing `/`)
1. In `FirebaseRoom_ESP8266`: replace `FIREBASE_HOST` with the `Database Hostname`
1. Go to  `⚙ > Project Settings > Database > Database secrets`
1. Click `Firebase Secrets > Show`
1. Copy the `Database Secret`
1. In `FirebaseRoom_ESP8266`:  Replace `FIREBASE_AUTH` with `Database Secret`
1. Select the board `Board > ESP8266 Modules > NodeMCU 1.0`
1. Select the serial port  `Port > /dev/tty...`
1. Select the upload speed `Upload Speed > 115200`
1. Click `Sketch > Upload`

## Play

1. Go to the Firebase console `Data` section
1. Watch the data being modified as the sketch runs


Certainly! Here's a similar format tailored for your "Lasereye" project:

---

# Lasereye

## To Run Lasereye Locally:

1. **Download the Application:**
   - Visit the GitHub repository for Lasereye.
   - Click on the green "Code" button and select "Download ZIP".
   - Once downloaded, extract the ZIP file to your desired location.

2. **Setup ESP8266 Board:**
   - Connect and configure the ESP8266 board with the laser and laser sensor as per the project requirements.

3. **Install Dependencies:**
   - [Add any specific instructions for installing dependencies, such as Firebase setup or Android Studio installation.]

4. **Run the Android App:**
   - Open the Android Studio IDE.
   - Import the project located in the extracted folder.
   - Run the app on an Android emulator or physical device.

5. **Interact with Lasereye:**
   - Use the Android app to monitor real-time notifications of trespassing events.
   - Toggle the sensor's on/off status remotely through the app.

## Features:

- Real-time Trespassing Detection: Lasereye detects trespassing events in real-time using a laser sensor.
- Firebase Integration: Trespassing events are recorded and stored in Firebase Realtime Database for access and monitoring.
- Android App Notifications: Receive instant notifications on your Android device when a trespassing event occurs.
- History Tracking: View a history of trespassing events within the Android app for monitoring and analysis.
- Remote Control: Control the sensor's on/off status remotely through the Android app.

---

Feel free to customize this template with specific details about your project. Let me know if you need further assistance!
