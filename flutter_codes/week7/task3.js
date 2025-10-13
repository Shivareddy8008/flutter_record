const task3 = {
  name: "Program 1: Adding Animations to Enhance UX",
  code: `
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(home: AllAnimationsDemo());
  }
}

class AllAnimationsDemo extends StatefulWidget {
  @override
  _AllAnimationsDemoState createState() => _AllAnimationsDemoState();
}

class _AllAnimationsDemoState extends State<AllAnimationsDemo> {
  bool _visible = true;
  bool _slided = false;
  double _scale = 1.0;
  double _rotation = 0.0;
  double _position = 0.0;
  double _boxSize = 100;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("All Animation Classes")),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SizedBox(height: 20),
            // 🔹 1. Fade (AnimatedOpacity)
            AnimatedOpacity(
              opacity: _visible ? 1.0 : 0.0,
              duration: Duration(seconds: 1),
              child: Text("Fade Animation", style: TextStyle(fontSize: 20)),
            ),
            SizedBox(height: 20),
            // 🔹 2. Slide (AnimatedSlide)
            AnimatedSlide(
              offset: _slided ? Offset(1, 0) : Offset(0, 0),
              duration: Duration(seconds: 1),
              child: Container(
                color: Colors.blue,
                padding: EdgeInsets.all(12),
                child: Text("Slide Animation", style: TextStyle(color: Colors.white)),
              ),
            ),

            SizedBox(height: 20),
            // 🔹 3. Scale (AnimatedScale)
            AnimatedScale(
              scale: _scale,
              duration: Duration(seconds: 1),
              child: Icon(Icons.star, size: 60, color: Colors.orange),
            ),
            SizedBox(height: 20),
            // 🔹 4. Rotation (AnimatedRotation)
            AnimatedRotation(
              turns: _rotation,
              duration: Duration(seconds: 1),
              child: Icon(Icons.refresh, size: 60, color: Colors.green),
            ),
            SizedBox(height: 20),

            // 🔹 5. Position (AnimatedPositioned) inside Stack
            Container(
              height: 120,
              color: Colors.grey[300],
              child: Stack(
                children: [
                  AnimatedPositioned(
                    duration: Duration(seconds: 1),
                    left: _position,
                    top: 30,
                    child: Container(
                      width: 50,
                      height: 50,
                      color: Colors.purple,
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 20),

            // 🔹 6. Container (AnimatedContainer)
            AnimatedContainer(
              duration: Duration(seconds: 1),
              curve: Curves.easeInOut,
              width: _boxSize,
              height: _boxSize,
              color: Colors.red,
            ),

            SizedBox(height: 30),

            // 🔹 Buttons to trigger animations
            Wrap(
              spacing: 10,
              children: [
                ElevatedButton(onPressed: () => setState(() => _visible = !_visible), child: Text("Fade")),
                ElevatedButton(onPressed: () => setState(() => _slided = !_slided), child: Text("Slide")),
                ElevatedButton(onPressed: () => setState(() => _scale = _scale == 1.0 ? 1.5 : 1.0), child: Text("Scale")),
                ElevatedButton(onPressed: () => setState(() => _rotation += 0.25), child: Text("Rotate")),
                ElevatedButton(onPressed: () => setState(() => _position = _position == 0 ? 200 : 0), child: Text("Move")),
                ElevatedButton(onPressed: () => setState(() => _boxSize = _boxSize == 100 ? 150 : 100), child: Text("Resize")),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
`,
  output: "images/week7/task3.png",
};

export default task3;
