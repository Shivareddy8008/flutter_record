const task2 = {
  name:`Program 2: Profile Card Design
•Widgets used: Card, CircleAvatar, Column, Row
•Simple user profile with name, email, and avatar picture.
`,
  code: `
import 'package:flutter/material.dart';

void main() {
runApp(const MyApp());
}

class MyApp extends StatelessWidget {
const MyApp({super.key});

@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Profile Card Demo',
theme: ThemeData(
primarySwatch: Colors.blue,
),
home: Scaffold(
appBar: AppBar(
title: const Text('Profile Card'),
),
body: const Center(
child: ProfileCard(),
),
),
);
}
}

class ProfileCard extends StatelessWidget {
const ProfileCard({super.key});

@override
Widget build(BuildContext context) {
// A Card widget to hold the profile information.
return const Card(
elevation: 4.0, // Adds a shadow effect
margin: EdgeInsets.all(16.0),
child: Padding(
padding: EdgeInsets.all(16.0),
// A Column widget to stack the avatar and text vertically.
child: Column(
mainAxisSize: MainAxisSize.min, // Keep the card height minimal
children: <Widget>[

CircleAvatar(
radius: 40,
backgroundColor: Colors.lightBlue,
child: Text(
'LD',
style: TextStyle(fontSize: 30, color: Colors.white),
),
),

SizedBox(height: 16), // Vertical spacing
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: <Widget>[
// Row can be used here if you wanted to add an icon next to the text.
// For simple text, a Column with alignment is sufficient.
Text(
'Lakshyadeep',
style: TextStyle(
fontSize: 24,
fontWeight: FontWeight.bold,
),
),
SizedBox(height: 4), // Small vertical spacing
Text(
'238w1a1229@gmail.com',
style: TextStyle(
fontSize: 16,
color: Colors.grey,
),
),
],
),
],
),
),
);
}
}
`,
  output: "images/week8/task2.png",
};

export default task2;
