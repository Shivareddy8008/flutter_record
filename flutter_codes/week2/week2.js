const week2 = {
  title: "Week 2 - Installations & Basic Programming Concepts",
  type: "mixed",
  content: `
<b>Linux Operating System:</b><br>
✅ Step 1: System Requirements<br>
OS: Ubuntu 20.04 or later (64-bit)<br>
Disk Space: 2.8 GB (excluding IDE/tools)<br>
Tools: bash, curl, git, unzip, xz-utils, libglu1-mesa<br><br>

✅ Step 2: Install Required Dependencies<br>
<code>
sudo apt update<br>
sudo apt install curl git unzip xz-utils zip libglu1-mesa -y
</code><br><br>

✅ Step 3: Download the Flutter SDK<br>
<code>
cd ~<br>
curl -O https://storage.googleapis.com/flutter_infra_release/releases/stable/linux/flutter_linux_3.22.0-stable.tar.xz<br>
tar xf flutter_linux_3.22.0-stable.tar.xz
</code><br><br>

✅ Step 4: Add Flutter to PATH<br>
<code>
echo 'export PATH="$HOME/flutter/bin:$PATH"' >> ~/.bashrc<br>
source ~/.bashrc
</code><br><br>

✅ Step 5: Run Flutter Doctor<br>
<code>flutter doctor</code><br><br>

<b>Create and Run Dart Programs:</b><br>`,
};

export default week2;
