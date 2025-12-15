const task2 = {
  name: "Program 2: Grid-View using http package",
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
      title: 'GridView Random Data',
      home: RandomGridView(),
    );
  }
}

class RandomGridView extends StatefulWidget {
  @override
  State<RandomGridView> createState() => _RandomGridViewState();
}

class _RandomGridViewState extends State<RandomGridView> {
  final Random random = Random();

  final List<Map<String, dynamic>> randomItems = List.generate(
    8,
        (index) => {
      "item": "Item {index + 1}",
      "price": Random().nextInt(900) + 100,
    },
  );

  Color getRandomColor() {
    return Color.fromARGB(
      255,
      random.nextInt(255),
      random.nextInt(255),
      random.nextInt(255),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("GridView with Random Data"),
        backgroundColor: Colors.deepPurple,
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: GridView.builder(
          itemCount: randomItems.length,
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 4, // 3 columns instead of 2
            crossAxisSpacing: 4,
            mainAxisSpacing: 4,
            childAspectRatio: 1, // Square and smaller boxes
          ),
          itemBuilder: (context, index) {
            final item = randomItems[index];
            return Container(
              decoration: BoxDecoration(
                color: getRandomColor().withOpacity(0.7),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      item['item'],
                      style: const TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      "₹{item['price']}",
                      style: const TextStyle(fontSize: 12),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
`,
  output: "images/week10/task2.png",
};

export default task2;
