const task1 = {
  name: "Program 1: Text and Container",
  code: `
void main() {
  int age = 25;
  double height = 5.9;
  String name = 'Ramesh';
  bool isStudent = true;
  print('Name: \$name');
  print('Age: \$age');
  print('Height: \$height');
  print('Is a student: \$isStudent');

  if (age > 18) {
    print('\$name is an adult.');
  } else {
    print('\$name is a minor.');
  }

  print('Counting from 1 to 5:');
  greet(name);
}

void greet(String personName) {
  print('Hello, \$personName! Welcome to Dart.');
}`,
  output: "images/week2/task3.png",
};

export default task1;
