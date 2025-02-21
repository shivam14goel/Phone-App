**React Native Phone App**
A modern, feature-rich phone application built with React Native that provides essential phone functionalities including a home screen, dial pad, and contacts management.
📱 Features
1. **Home Screen**

Clean and intuitive user interface
Background image support
Two main navigation buttons:

Call button (green) - Directs to dial pad
Phonebook button (purple) - Directs to contacts


Responsive design with proper layout management
Custom styled buttons with modern aesthetics

![HomeScreen](https://github.com/user-attachments/assets/5c1f05fe-6246-4f62-b692-8ea47180f21e)


2. **Dial Pad Screen**

Numeric keypad with digits 0-9, *, and #
Real-time phone number display
Backspace functionality for number correction
Call button for initiating calls
Features:

Number input validation
Clean, grid-based layout
Visual feedback on button press
Properly spaced buttons for better usability

![Dialpad](https://github.com/user-attachments/assets/24d18ef5-f7da-41e5-a79f-5cd139fa31b4)


3. **Contacts Screen**

Complete contact management system
Features:

Add new contacts
View contact list
Contact avatars with initials
Quick call button for each contact
Modern modal for adding contacts
Form validation for contact details

![Contacts](https://github.com/user-attachments/assets/97916e4b-5f71-47dc-947e-11c61be32e1f)


🛠️ **Technical Details
Built With**

React Native
Expo
React Navigation
@expo/vector-icons

Component Structure
Copysrc/
├── screens/
│   ├── HomeScreen.js
│   ├── DialPad.js
│   └── ContactsScreen.js
├── assets/
│   └── homescreen.jpg
└── App.js
📋 Prerequisites
Before running this project, make sure you have the following installed:

Node.js (v12 or higher)
npm or yarn
Expo CLI
React Native development environment
