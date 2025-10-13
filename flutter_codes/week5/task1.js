const task1 = {
  name: "Program 1: Design a UI that adapts to different screen sizes and device orientations.",
  type: 'mixed',
  code: `
import 'package:flutter/material.dart';
void main() { runApp(const MyApp());
}
class MyApp extends StatelessWidget { const MyApp({super.key});

@override
Widget build(BuildContext context) { return MaterialApp(
home: const ResponsiveExample(), debugShowCheckedModeBanner: false,
);
}
}
class ResponsiveExample extends StatelessWidget { const ResponsiveExample({super.key});
@override
Widget build(BuildContext context) {
// Check orientation
final isPortrait = MediaQuery.of(context).orientation == Orientation.portrait;
return Scaffold(
appBar: AppBar(title: const Text("Simple Responsive UI")), body: isPortrait
? Column( children: [
Expanded(child: Container(color: Colors.blue, child: const Center(child: Text("Top Section")))),
Expanded(child: Container(color: Colors.green, child: const Center(child: Text("Bottom Section")))),
],
)
: Row(
children: [
Expanded(child: Container(color: Colors.blue, child: const Center(child: Text("Left Section")))),
Expanded(child: Container(color: Colors.green, child: const Center(child: Text("Right Section")))),
],
),
);
}
}
`,
  output: "images/week5/task1.png",
};

export default task1;
