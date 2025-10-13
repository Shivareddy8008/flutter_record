const task3 = {
  name: "Program 3: Implement form validation and display appropriate error messages.",
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
      title: 'Flutter Form Validation',
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
      appBar: AppBar(title: const Text("User Form with Validation")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          autovalidateMode:
              AutovalidateMode.onUserInteraction, // validate as user types
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Name Field
              TextFormField(
                decoration: const InputDecoration(
                  labelText: "Name",
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return "Please enter your name";
                  }
                  if (value.trim().length < 3) {
                    return "Name must be at least 3 characters long";
                  }
                  return null;
                },
                onSaved: (value) => name = value!,
              ),
              const SizedBox(height: 16),

              // Email Field
              TextFormField(
                decoration: const InputDecoration(
                  labelText: "Email",
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return "Please enter your email";
                  }
                  if (!RegExp(r'^[^@]+@[^@]+\.[^@]+').hasMatch(value)) {
                    return "Enter a valid email address";
                  }
                  return null;
                },
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
                    .map((g) => DropdownMenuItem(value: g, child: Text(g)))
                    .toList(),
                onChanged: (value) {
                  setState(() => gender = value);
                },
                validator: (value) =>
                    value == null ? "Please select your gender" : null,
              ),
              const SizedBox(height: 16),

              // Checkbox with error message
              FormField<bool>(
                validator: (value) {
                  if (!termsAccepted) {
                    return "You must accept the terms & conditions";
                  }
                  return null;
                },
                builder: (formFieldState) {
                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Checkbox(
                            value: termsAccepted,
                            onChanged: (value) {
                              setState(() {
                                termsAccepted = value!;
                                formFieldState.didChange(value);
                              });
                            },
                          ),
                          const Text("I accept the terms & conditions"),
                        ],
                      ),
                      if (formFieldState.hasError)
                        Text(
                          formFieldState.errorText!,
                          style: const TextStyle(color: Colors.red, fontSize: 12),
                        )
                    ],
                  );
                },
              ),
              const SizedBox(height: 20),

              // Submit Button
              Center(
                child: ElevatedButton(
                  onPressed: () {
                    if (_formKey.currentState!.validate()) {
                      _formKey.currentState!.save();
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          content: Text(
                              "Form Submitted:\nName=$name\nEmail=$email\nGender=$gender"),
                        ),
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
  output: "images/week6/task3.png",
};

export default task3;
