const task1 = {
  name: "Row Layout Example",
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
      title: 'Row Layout Example',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: RowExample(), // Home screen is RowExample
    );
  }
}

// Row Layout Example
class RowExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Row Layout Example"),
        centerTitle: true,
      ),
      body: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Icon(Icons.home, size: 60, color: Colors.blue),
            Icon(Icons.star, size: 60, color: Colors.orange),
            Icon(Icons.settings, size: 60, color: Colors.green),
          ],
        ),
      ),
    );
  }
}
`,
  output: "images/week4/task1.png",
};

export default task1;
