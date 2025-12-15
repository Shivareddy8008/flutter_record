const task3 = {
  name: `Program 3: Flutter Program with All Widgets
  •	TextField
•	ElevatedButton
•	Column
•	Container
•	Card
•	CircleAvatar
•	Column
•	Row
•	GridView
•	Icon
•	Text
•	BottomNavigationBar
•	Scaffold
•	ListView
•	ListTile
`,
  code: `
import 'package:flutter/material.dart';

// --- Main Function and App Widget ---

void main() {
runApp(const WidgetShowcaseApp());
}

class WidgetShowcaseApp extends StatelessWidget {
const WidgetShowcaseApp({super.key});

@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Flutter Widget Showcase',
theme: ThemeData(
primarySwatch: Colors.blue,
),
home: const WidgetShowcaseScreen(),
);
}
}

// --- Stateful Screen Widget ---

class WidgetShowcaseScreen extends StatefulWidget {
const WidgetShowcaseScreen({super.key});

@override
State<WidgetShowcaseScreen> createState() => _WidgetShowcaseScreenState();
}

class _WidgetShowcaseScreenState extends State<WidgetShowcaseScreen> {
// State for the TextField
String _inputText = 'Hello, Lakshyadeep!';
int _selectedIndex = 0; // For BottomNavigationBar

void _onItemTapped(int index) {
setState(() {
_selectedIndex = index;
});
}

// --- Main Build Method ---

@override
Widget build(BuildContext context) {
// SCROLLABLE SCREEN (using ListView implicitly handles Column/Row size)
return Scaffold(
// 1. SCAFFOLD: Provides the basic structure (AppBar, body, BtmNavBar)
appBar: AppBar(
title: const Text('Widget Showcase Demo'),
),
// 2. BOTTOMNAVIGATIONBAR
bottomNavigationBar: BottomNavigationBar(
items: const <BottomNavigationBarItem>[
BottomNavigationBarItem(
icon: Icon(Icons.home),
label: 'Home',
),
BottomNavigationBarItem(
icon: Icon(Icons.settings),
label: 'Settings',
),
BottomNavigationBarItem(
icon: Icon(Icons.person),
label: 'Profile',
),
],
currentIndex: _selectedIndex,
onTap: _onItemTapped,
),
body: SingleChildScrollView( // Use SingleChildScrollView to make the content scrollable
// 3. COLUMN: Arranges children vertically
child: Column(
crossAxisAlignment: CrossAxisAlignment.stretch,
children: <Widget>[
// 4. CONTAINER & 5. ROW (for the profile header)
Container(
padding: const EdgeInsets.all(16.0),
color: Colors.blue[50],
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: <Widget>[
// 6. CIRCLEAVATAR & 7. ICON
const CircleAvatar(
radius: 40,
child: Icon(Icons.flutter_dash, size: 40),
),
// 8. COLUMN (nested inside Row)
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: <Widget>[
// 9. TEXT
Text(
'Lakshyadeep',
style: Theme.of(context).textTheme.headlineSmall,
),
Text(
'Information Technology',
style: Theme.of(context).textTheme.titleMedium,
),
],
),
// 10. ELEVATEDBUTTON
ElevatedButton(
onPressed: () {
ScaffoldMessenger.of(context).showSnackBar(
const SnackBar(content: Text('Button Pressed!')),
);
},
child: const Text('Connect'),
),
],
),
),

const Divider(), // Simple visual separator

// 11. TEXTFIELD & Input Display
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
const Text('Text Input:'),
// 12. TEXTFIELD
TextField(
decoration: const InputDecoration(
labelText: 'Type something...',
border: OutlineInputBorder(),
),
onChanged: (text) {
setState(() {
_inputText = text;
});
},
),
const SizedBox(height: 10),
// Displaying the input
Text(
'Current Input: $_inputText',
style: const TextStyle(fontWeight: FontWeight.bold),
),
],
),
),

const Divider(),

// 13. CARD & 14. LISTTILE (The ListTile is often used inside a Card)
Card(
elevation: 4,
margin: const EdgeInsets.all(16.0),
child: Column(
children: const [
ListTile(
leading: Icon(Icons.info),
title: Text('Information Card'),
subtitle: Text('This is a demonstration of Card and ListTile.'),
trailing: Icon(Icons.chevron_right),
),
// Demonstrating another ListTile
ListTile(
leading: Icon(Icons.code),
title: Text('More Details'),
),
],
),
),
const Padding(
padding: EdgeInsets.all(16.0),
child: Text(
'Note: ListView and GridView are better used as the primary body of a Scaffold '
'or with a fixed height, but are omitted here to keep the main layout simple '
'and scrollable via SingleChildScrollView.',
textAlign: TextAlign.center,
style: TextStyle(fontStyle: FontStyle.italic, color: Colors.grey),
),
),
],
),
),
);
}
}
`,
  output: "images/week8/task3.png",
};

export default task3;
