const task2 = {
  name: "Program 2: Design a form with input fields such as text fields, dropdowns, and checkboxes.",
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
      title: 'Flutter Form Example',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const FormScreen(),
    );
  }
}

class FormScreen extends StatefulWidget {
  const FormScreen({super.key});

  @override
  State<FormScreen> createState() => _FormScreenState();
}

class _FormScreenState extends State<FormScreen> {
  final _formKey = GlobalKey<FormState>();

  // Form fields
  String name = '';
  String email = '';
  String? gender;
  bool termsAccepted = false;

  final List<String> genders = ["Male", "Female", "Other"];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("User Form")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Name Field
              TextFormField(
                decoration: const InputDecoration(
                  labelText: "Name",
                  border: OutlineInputBorder(),
                ),
                validator: (value) =>
                    value == null || value.isEmpty ? "Enter your name" : null,
                onSaved: (value) => name = value!,
              ),
              const SizedBox(height: 16),

              // Email Field
              TextFormField(
                decoration: const InputDecoration(
                  labelText: "Email",
                  border: OutlineInputBorder(),
                ),
                validator: (value) => (value == null || !value.contains("@"))
                    ? "Enter a valid email"
                    : null,
                onSaved: (value) => email = value!,
              ),
              const SizedBox(height: 16),

              // Dropdown
              DropdownButtonFormField<String>(
                decoration: const InputDecoration(
                  labelText: "Gender",
                  border: OutlineInputBorder(),
                ),
                items: genders
                    .map((g) =>
                        DropdownMenuItem(value: g, child: Text(g)))
                    .toList(),
                onChanged: (value) {
                  setState(() => gender = value);
                },
                validator: (value) =>
                    value == null ? "Please select gender" : null,
              ),
              const SizedBox(height: 16),

              // Checkbox
              Row(
                children: [
                  Checkbox(
                    value: termsAccepted,
                    onChanged: (value) {
                      setState(() => termsAccepted = value!);
                    },
                  ),
                  const Text("I accept the terms & conditions"),
                ],
              ),

              // Submit Button
              Center(
                child: ElevatedButton(
                  onPressed: () {
                    if (_formKey.currentState!.validate() && termsAccepted) {
                      _formKey.currentState!.save();
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          content: Text(
                              "Submitted: Name=$name, Email=$email, Gender=$gender"),
                        ),
                      );
                    } else if (!termsAccepted) {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                            content:
                                Text("Please accept terms & conditions")),
                      );
                    }
                  },
                  child: const Text("Submit"),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
`,
  output: "images/week6/task2.png",
};

export default task2;
