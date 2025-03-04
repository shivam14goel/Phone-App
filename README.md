# React Native Phone App

A modern, feature-rich phone application built with React Native that provides essential phone functionalities including a home screen, dial pad, and contacts management.

## 📱 Features

### 1. Home Screen
###![HomeScreen](https://github.com/user-attachments/assets/ba3cd2d9-fc1c-492f-afc6-91158d503fda)

- Clean and intuitive user interface
- Background image support
- Two main navigation buttons:
  - Call button (green) - Directs to dial pad
  - Phonebook button (purple) - Directs to contacts
- Responsive design with proper layout management
- Custom styled buttons with modern aesthetics

### 2. Dial Pad Screen
###![Dialpad](https://github.com/user-attachments/assets/bac26434-ed8e-4962-b286-b312b157ce06)

c:\Users\R K G\Downloads\Contacts.jpg
- Numeric keypad with digits 0-9, *, and #
- Real-time phone number display
- Backspace functionality for number correction
- Call button for initiating calls
- Features:
  - Number input validation
  - Clean, grid-based layout
  - Visual feedback on button press
  - Properly spaced buttons for better usability

### 3. Contacts Screen
###![Contacts](https://github.com/user-attachments/assets/75819123-d399-4b22-9b6e-c36b1796eaf9)

c:\Users\R K G\Downloads\Dialpad.jpg
- Complete contact management system
- Features:
  - Sync with device contacts
  - Add new contacts
  - View contact list
  - Contact avatars with initials
  - Quick call button for each contact
  - Modern modal for adding contacts
  - Form validation for contact details

## 🛠️ Technical Details

### Built With
- React Native
- Expo
- React Navigation
- @expo/vector-icons
- Expo Contacts

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v12 or higher)
- npm or yarn
- Expo CLI
- React Native development environment

## 💻 Usage

### Home Screen
The main entry point of the application, featuring:
```javascript
navigation.navigate('DialPad')  // Navigate to dial pad
navigation.navigate('Contacts') // Navigate to contacts
```

## 🎨 Styling

The app uses a consistent color scheme:
- Primary colors:
  - Green (#4CAF50) for call-related actions
  - Purple (#9C27B0) for contacts-related actions
- Secondary colors:
  - Background: #f5f5f5
  - Text: Various shades of gray
  - Accent: White for contrast

## 🔄 State Management

- Uses React's useState for local state management
- Maintains separate states for:
  - Phone number input
  - Contact list
  - Modal visibility
  - Form inputs

## 📱 Screens Breakdown

### Home Screen
```javascript
const HomeScreen = () => {
  return (
    <ImageBackground>
      {/* Navigation buttons */}
    </ImageBackground>
  );
};
```

### Dial Pad
```javascript
const DialPad = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  // Dial pad implementation
};
```

### Contacts
```javascript
const ContactsScreen = () => {
  const [contacts, setContacts] = useState([]);
  // Contacts management implementation
};
```

## 🔜 Future Enhancements

- Contact search functionality
- Contact editing and deletion
- Call history
- Favorites list
- Contact groups
- Data persistence using AsyncStorage
- Dark mode support



## ✨ Acknowledgments

- React Native community
- Expo team
- All contributors who have helped this project grow















