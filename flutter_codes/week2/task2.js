const task2 = {
  name: "Program 2: Text and Container",
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
  for (int i = 1; i <= 5; i++) {
    print(i);
  }
}`,
  output: "images/week2/task2.png",
};

export default task2;
