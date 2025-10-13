const task4 = {
  name: "Row, Column & Stack in One App ",
  code: `
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Row, Column & Stack Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: HomeScreen(), // Start from menu
    );
  }
}

// -------------------- Home Screen --------------------
class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Flutter Layouts")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              child: Text("Row Layout"),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => RowExample()),
                );
              },
            ),
            SizedBox(height: 20),
            ElevatedButton(
              child: Text("Column Layout"),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => ColumnExample()),
                );
              },
            ),
            SizedBox(height: 20),
            ElevatedButton(
              child: Text("Stack Layout"),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => StackExample()),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}

// -------------------- Row Example --------------------
class RowExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Row Layout Example")),
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

// -------------------- Column Example --------------------
class ColumnExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Column Layout Example")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Text("Flutter",
                style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold)),
            ElevatedButton(onPressed: () {}, child: Text("Click Me")),
            Icon(Icons.thumb_up, size: 60, color: Colors.purple),
          ],
        ),
      ),
    );
  }
}

// -------------------- Stack Example --------------------
class StackExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Stack Layout Example")),
      body: Center(
        child: Stack(
          alignment: Alignment.center,
          children: [
            Container(width: 200, height: 200, color: Colors.blue),
            Container(width: 150, height: 150, color: Colors.red),
            Container(width: 100, height: 100, color: Colors.green),
            Text(
              "Stacked",
              style: TextStyle(
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: FontWeight.bold),
            ),
          ],
        ),
      ),
    );
  }
}
`,
  output: "images/week4/task4.png",
};

export default task4;
