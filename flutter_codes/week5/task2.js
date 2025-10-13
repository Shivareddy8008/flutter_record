const task2 = {
  name: "Program 2: Use MediaQuery and layout breakpoints to implement responsiveness.",
  type: 'mixed',
  code: `
import 'package:flutter/material.dart';
void main() {
runApp(const MyApp());
}
class MyApp extends StatelessWidget { const MyApp({super.key});

@override
Widget build(BuildContext context) { return const MaterialApp( debugShowCheckedModeBanner: false, home: ResponsiveExample(),
);
}
}
class ResponsiveExample extends StatelessWidget { const ResponsiveExample({super.key});
@override
Widget build(BuildContext context) {
final screenWidth = MediaQuery.of(context).size.width;

// breakpoint: <600 = mobile, >=600 = tablet/desktop final isMobile = screenWidth < 600;
return Scaffold(
appBar: AppBar(title: const Text("Simple Responsive UI")), body: isMobile ? Column( children: [Expanded(child: Container(color: Colors.blue, child: const Center(child: Text("Mobile -
Top")))),Expanded(child: Container(color: Colors.green, child: const Center(child: Text("Mobile - Bottom")))),
],
)
: Row(
children: [
Expanded(child: Container(color: Colors.blue, child: const Center(child: Text("Tablet/Desktop - Left")))),
Expanded(child: Container(color: Colors.green, child: const Center(child: Text("Tablet/Desktop - Right")))),
],
),
);
}
}
`,
  output: "images/week5/task2.png",
};

export default task2;
