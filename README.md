# Day 09, 10 Practicals 

MyApp is a React Native application designed to provide users with a seamless and user-friendly experience for interacting with a "Contact Us" form and a "Home" screen. Built with modern libraries like `react-native-paper` and `react-native-safe-area-context`, it ensures compatibility across different platforms.

## Features

- **Contact Us Form**: Includes fields for name, email, phone number, and a message with a submit button.
- **Home Screen**: Displays a large headline, styled text content, and an interactive button.
- **Responsive Design**: Utilizes `KeyboardAvoidingView` for smooth keyboard interaction on both iOS and Android.
- **Safe Area Support**: Ensures content is displayed properly on devices with notches or rounded corners.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **Expo CLI**: Install Expo CLI globally by running:

  ```bash
  npm install -g expo-cli
  ```

- **Dependencies**: 

  - `react-native`
  - `react-native-paper`
  - `react-native-safe-area-context`

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/myapp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd myapp
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   expo start
   ```

## File Structure

```
MyApp/
├── components/
│   ├── Home.js        # Home screen component
│   ├── ContactUs.js   # Contact Us screen component
├── App.js             # Main application entry point
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

## Components

### Home
- Displays a headline, styled text, and a button.
- Uses `react-native-paper` components like `Text`, `Divider`, and `Button` for a polished UI.

### ContactUs
- Includes fields for:
  - Name
  - Email
  - Phone Number
  - Message
- Utilizes `useState` to manage form data and display the user's input dynamically.

## Styles
- Centralized styling with `StyleSheet` to maintain consistency.
- `KeyboardAvoidingView` ensures better user interaction by adjusting layout based on the keyboard visibility.

## Usage
1. Open the app in the Expo Go app on your mobile device or run it on an emulator.
2. Navigate between the "Home" and "Contact Us" sections.
3. Fill out the form fields and interact with buttons to see functionality in action.

## Contributing
Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License
This project is licensed under the [MIT License](LICENSE).

---
