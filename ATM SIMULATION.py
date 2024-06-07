print ("WELCOME TO BRAINWAVE-MATRIX-SOLUTIONS ATM SIMULATION")

print ('Please insert your ATM Card')

print("Please wait... \n Reading Card information... \n Successful!!!")

print ("Please proceed to create an account. ")

createUserName = input("Please type your username: ")
createPin = int(input("Please create a four digits Pin: "))

print("Account created successfully!")
print (f"Your Username is: {createUserName} and your password is: {createPin}")

Balance = 10000
Attempt = 0

def checker():
    global Attempt
    
    while (Attempt < 4):
        User = input("Please enter your username: ")
        Pin = int(input ("Please enter your Pin: "))  
        
        if (createPin == Pin and createUserName == User):
            print(f"You are successfully logged in \n Welcome {createUserName}!")
            
            print("MAIN MENU")
            print("1. Withdrawal")
            print("2. Deposit")
            print("3. Inquiries")
            
            print("PRESS 1 FOR WITHDRAWAL \n PRESS 2 FOR DEPOSIT \n PRESS 3 FOR INQUIRIES")
            
            option = int(input("Please select an option: "))
            
            if option ==1:
                print("WITHDRAWAL")
                withdrawn = int(input("How much do you want withdraw: $"))
                
                if Balance > withdrawn:
                    print(f"TAKE YOUR CASH \n your current balance is ${Balance - withdrawn}")
                    
                else:
                    print("Insufficient funds, Try withdrawing a lesser Amount")
                    
                
            elif option ==2:
                print("DEPOSIT")
                deposit = int(input("Enter the amout you want to deposit: $"))
                print(f"DEPOSIT SUCCESSFUL! \n Your current balance is ${Balance + deposit}")
                
            elif option ==3:
                print(f"INQUIRES \n Your current account balance is ${Balance}")
                
            else:
                print("Invalid option !")
                
            return True
        
        else:
            print("Invalid credentials, Please try again ")
            Attempt  += 1
            print(f"Attempts {Attempt} out of 4 trials")
            
    print("Maximum attempts reached. Please contact Brain-wave-matrix bank. \n You have been logged out :) ")
    return False
checker()