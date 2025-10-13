const task1 = {
  name: "Program 1: Create reusable custom widgets for common UI components.",
  code: `
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: HomeScreen());
  }
}

/// 🔹 Reusable Button Widget
class CustomButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;

  const CustomButton({super.key, required this.text, required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      child: Text(text),
    );
  }
}

/// 🔹 Using the Reusable Button
class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Simple Reusable Widget")),
      body: Center(
        child: CustomButton(
          text: "Click Me",
          onPressed: () {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(content: Text("Button Pressed!")),
            );
          },
        ),
      ),
    );
  }
}
`,
  output: "images/week7/task1.png",
};

export default task1;
