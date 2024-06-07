# Brainwave_Matrix_Intern
Overview
The Brainwave-Matrix-S1olutions ATM Simulation is a simple text-based simulation of an ATM system. It allows users to create an account, log in, and perform basic banking operations such as withdrawals, deposits, and balance inquiries.

Features
Account creation with username and a four-digit PIN.
User login with username and PIN validation.
Withdrawal, deposit, and balance inquiry options.
Limited login attempts to enhance security.

# Project Structure

# ATM_Simulation/
│
├── README.md
└── atm_simulation.py

Installation
This project requires Python 3 to be installed on your system.

Clone the repository or download the atm_simulation.py file to your local machine.
Ensure you have Python 3 installed. You can check this by running:
python --version

Usage
Open a terminal or command prompt.
Navigate to the directory where the atm_simulation.py file is located.
Run the script using Python:
python atm_simulation.py
Follow the on-screen prompts to interact with the ATM simulation.
Example Interaction

WELCOME TO BRAINWAVE-MATRIX-S1OLUTIONS ATM SIMULATION
Please insert your ATM Card
Please wait... 
Reading Card information... 
Successful!!!
Please proceed to create an account.
Please type your username: user1
Please create a four digits Pin: 1234
Account created successfully!
Your Username is: user1 and your password is: 1234
PLEASE LOG IN TO CONTINUE
Please re-enter your username: user1
Please re-enter your Pin: 1234
You are successfully logged in 
Welcome user1 !!!
MAIN MENU
1. Withdrawal
2. Deposit
3. Inquiries
PRESS 1 FOR WITHDRAWAL 
PRESS 2 FOR DEPOSIT 
PRESS 3 FOR INQUIRIES
Please select an option: 1
WITHDRAWAL
How much do you want withdraw: $500
TAKE YOUR CASH 
Your current balance is $9500
THANK YOU FOR USING BRAIN-WAVE-MATRIX-SOLUTION BANK !!!

Notes
The balance is initialized to $10,000.
Users have four attempts to log in correctly before being locked out.
The project currently does not save user data between sessions.
Contributing
Contributions to this project are welcome. Feel free to fork the repository and submit pull requests with improvements.

License
This project is open source project.

Acknowledgements
Special thanks to Brainwave-Matrix-S1olutions for inspiring this project.
