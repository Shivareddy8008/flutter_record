const week3 = {
  title: "Week 3 - Installations & Basic Programming Concepts",
  type: "mixed",
  content: `
    <h2>📥 Installation of Android Studio in Ubuntu</h2>
    <p><strong>Step 1: Install Java (Required)</strong></p>
    <pre><code>sudo apt update
sudo apt install openjdk-17-jdk</code></pre>

    <p><strong>Step 2: Download Android Studio</strong></p>
    <p>Go to: <a href="https://developer.android.com/studio" target="_blank">https://developer.android.com/studio</a></p>
    <pre><code>wget https://redirector.gvt1.com/edgedl/android/studio/ide-zips/2023.2.1.21/android-studio-2023.2.1.21-linux.tar.gz</code></pre>

    <p><strong>Step 3: Extract the file</strong></p>
    <pre><code>tar -xvzf android-studio-*.tar.gz</code></pre>

    <p><strong>Step 4: Move to /opt</strong></p>
    <pre><code>sudo mv android-studio /opt/</code></pre>

    <p><strong>Step 5: Launch Android Studio</strong></p>
    <pre><code>/opt/android-studio/bin/studio.sh</code></pre>

    <p>Follow the setup wizard (Install SDK, configure emulator, etc.)</p>

    <hr>

    <h2>🛠️ Creating & Running Dart Programs in Android Studio (Ubuntu)</h2>
    <h3>Step 1: Install Dart Plugin in Android Studio</h3>
    <ul>
      <li>Open Android Studio.</li>
      <li>Go to <strong>File → Settings</strong> (Ctrl + Alt + S).</li>
      <li>Navigate to <strong>Plugins</strong>.</li>
      <li>Search for <strong>Dart</strong> in Marketplace.</li>
      <li>Click Install (also install Flutter plugin if needed).</li>
      <li>Restart Android Studio.</li>
    </ul>

    <h3>Step 2: Create a Dart Project</h3>
    <ol>
      <li>On the Android Studio welcome screen → <strong>New Project</strong> → Dart.</li>
      <li>Choose <strong>Dart Console Application</strong>.</li>
      <li>Specify project location.</li>
      <li>Set Dart SDK path or install Dart manually:</li>
    </ol>
    <pre><code>sudo apt update
sudo apt install apt-transport-https
sudo sh -c 'wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
sudo sh -c 'wget -qO- https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
sudo apt update
sudo apt install dart</code></pre>

    <h3>Step 3: Write & Run Dart Program</h3>
    <pre><code>void main() {
  print("Hello, Dart!");
}</code></pre>

    <p>To run:</p>
    <ul>
      <li>Click ▶️ Run in Android Studio</li>
      <li>Or in terminal:</li>
    </ul>
    <pre><code>dart run</code></pre>

    <h3>Step 4: (Optional) Run Dart in Terminal</h3>
    <pre><code>dart --version
dart hello.dart</code></pre>

    <hr>

    <h2>🚀 Creating Flutter Project in Android Studio</h2>
    <pre><code>/opt/android-studio/bin/studio.sh</code></pre>
    <ul>
      <li>ALT + F → New → New Flutter Project</li>
      <li>Select Flutter from Generators (left side)</li>
      <li>Click Next → Enter Project Name</li>
      <li>Click Create → Project Window Opens</li>
      <li>Select <strong>lib/main.dart</strong> from left panel</li>
    </ul>
  `,
};

export default week3;
