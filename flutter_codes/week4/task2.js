const task2 = {
  name: "Column Layout Example ",
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
      title: 'Column Layout Example',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: ColumnExample(), // Home screen is ColumnExample
    );
  }
}

// Column Layout Example
class ColumnExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Column Layout Example"),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly, // Distribute evenly
          children: [
            Text(
              "Flutter",
              style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
            ),
            ElevatedButton(
              onPressed: () {},
              child: Text("Click Me"),
            ),
            Icon(Icons.thumb_up, size: 60, color: Colors.purple),
          ],
        ),
      ),
    );
  }
}
`,
  output: "images/week4/task2.png",
};

export default task2;
