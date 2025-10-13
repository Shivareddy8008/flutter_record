const task1 = {
  name: "Program 1: Set up navigation between multiple screens using Navigator.",
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
      title: 'Flutter Navigation Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Home Screen")),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Navigate to Second Screen
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const SecondScreen()),
            );
          },
          child: const Text("Go to Second Screen"),
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  const SecondScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Second Screen")),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Navigate back to Home Screen
            Navigator.pop(context);
          },
          child: const Text("Back to Home Screen"),
        ),
      ),
    );
 }
`,
  output: "images/week6/task1.png",
};

export default task1;
