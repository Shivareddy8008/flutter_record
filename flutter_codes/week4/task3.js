const task1 = {
  name: "Stack Layout Example ",
  code: `
import 'package:flutter/material.dart';

// Entry point of the app
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Stack Layout Example',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: StackExample(), // Home screen is StackExample
    );
  }
}

// Stack Layout Example
class StackExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Stack Layout Example"),
        centerTitle: true,
      ),
      body: Center(
        child: Stack(
          alignment: Alignment.center, // Center all children
          children: [
            Container(width: 200, height: 200, color: Colors.blue),
            Container(width: 150, height: 150, color: Colors.red),
            Container(width: 100, height: 100, color: Colors.green),
            Text(
              "Stacked",
              style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold),
            ),
          ],
        ),
      ),
    );
  }
}
`,
  output: "images/week4/task3.png",
};

export default task1;
