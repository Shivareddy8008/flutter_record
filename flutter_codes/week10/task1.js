const task1 = {
  name: "Program 1: List-View using http package",
  code: `
import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'ListView Random Data',
      home: RandomListView(),
    );
  }
}

class RandomListView extends StatefulWidget {
  @override
  State<RandomListView> createState() => _RandomListViewState();
}

class _RandomListViewState extends State<RandomListView> {
  // Generate a random list of names, ages, and marks
  final List<Map<String, dynamic>> randomUsers = List.generate(
    7,
        (index) => {
      "name": "User {index + 1}",
      "age": 18 + Random().nextInt(10),
      "marks": 50 + Random().nextInt(50),
    },
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("ListView with Random Data"),
        backgroundColor: Colors.teal,
      ),
      body: ListView.builder(
        itemCount: randomUsers.length,
        itemBuilder: (context, index) {
          final user = randomUsers[index];
          return Card(
            margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            elevation: 3,
            child: ListTile(
              leading: CircleAvatar(
                backgroundColor: Colors.tealAccent,
                child: Text(
                  user['name'][0],
                  style: const TextStyle(color: Colors.black),
                ),
              ),
              title: Text(user['name']),
              subtitle: Text("Age: {user['age']} | Marks: {user['marks']}"),
              trailing: const Icon(Icons.arrow_forward_ios, size: 18),
            ),
          );
        },
      ),
    );
  }
}
`,
  output: "images/week10/task1.png",
};

export default task1;
