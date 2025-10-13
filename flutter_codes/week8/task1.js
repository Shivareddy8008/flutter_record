const task1 = {
  name: `Program 1: Create a simple login screen with validation
 Login Page Design
•	Widgets used: TextField, ElevatedButton, Column, Container
•	Can include email, password fields, and a login button.
`,
  code: `
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Login',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const LoginScreen(),
    );
  }
}

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  // Key to identify the Form and enable validation
  final _formKey = GlobalKey<FormState>();

  // Function to run when the Login button is pressed
  void _attemptLogin() {
    // Check if the form's current state is valid (runs all validators)
    if (_formKey.currentState!.validate()) {
      // If valid, display a simple success message
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Login Successful!')),
      );
      // In a real app, you would navigate to the next screen here.
    }
  }

  @override
  Widget build(BuildContext context) {
    // 1. Container/Padding for the entire form content
    return Scaffold(
      appBar: AppBar(
        title: const Text('Simple Login'),
      ),
      body: Container(
        padding: const EdgeInsets.all(24.0),
        child: Form(
          key: _formKey, // Attach the GlobalKey
          // 2. Column to stack the widgets vertically
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              const Text(
                'Welcome Back',
                style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 40),

              // 3. Email Input Field (TextFormField is used for validation)
              TextFormField(
                keyboardType: TextInputType.emailAddress,
                decoration: const InputDecoration(
                  labelText: 'Email',
                  hintText: 'user@example.com',
                  border: OutlineInputBorder(),
                  prefixIcon: Icon(Icons.email),
                ),
                // Validation logic for the Email field
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Email cannot be empty';
                  }
                  if (!value.contains('@')) {
                    return 'Please enter a valid email';
                  }
                  return null; // Input is valid
                },
              ),

              const SizedBox(height: 15),

              // 4. Password Input Field
              TextFormField(
                obscureText: true, // Hide password input
                decoration: const InputDecoration(
                  labelText: 'Password',
                  hintText: 'Enter your password',
                  border: OutlineInputBorder(),
                  prefixIcon: Icon(Icons.lock),
                ),
                // Validation logic for the Password field
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Password cannot be empty';
                  }
                  if (value.length < 6) {
                    return 'Password must be at least 6 characters';
                  }
                  return null; // Input is valid
                },
              ),

              const SizedBox(height: 30),

              // 5. Login Button (ElevatedButton)
              ElevatedButton(
                onPressed: _attemptLogin,
                style: ElevatedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
                child: const Text(
                  'LOG IN',
                  style: TextStyle(fontSize: 18),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
`,
  output: "images/week8/task1.png",
};

export default task1;
