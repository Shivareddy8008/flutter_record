const task2 = {
  name: "Program 2: Apply app-wide styling using themes and custom styles.",
  code: `
import 'package:flutter/material.dart';
void main() => runApp(MyApp());
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Theme Example",
      theme: ThemeData(
        primarySwatch: Colors.blue,        // App primary color
        scaffoldBackgroundColor: Colors.grey[200], // Background color
        textTheme: TextTheme(
          bodyLarge: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          bodyMedium: TextStyle(fontSize: 16, color: Colors.black87),
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.blue,
            foregroundColor: Colors.white,
            padding: EdgeInsets.symmetric(horizontal: 20, vertical: 12),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
          ),
        ),
      ),
      home: HomeScreen(),
    );
  }
}
class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("App Theme Demo")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Hello Flutter!", style: Theme.of(context).textTheme.bodyLarge),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {},
              child: Text("Themed Button"),
            ),
          ],
        ),
      ),
    );
  }
}
`,
  output: "images/week7/task2.png",
};

export default task2;
