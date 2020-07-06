# 03-password-generator
This website contains a random password generator powered by HTML, CSS, and Javascript. A user can specify preferred password criteria using upper and lower-cased letters, numbers, and special characters. When the password is generated, the user can copy to the password to their clipboard. The website features an easy-to-use interface and responsive web design, adapting to multiple screen sized. 

Here is the link to my password generator: https://hilbug.github.io/03-password-generator/

Here is a preview of my password generator:
<img width="881" alt="Screen Shot 2020-07-05 at 10 55 22 PM" src="https://user-images.githubusercontent.com/65197724/86551557-5932b280-bf13-11ea-8c4f-fd1f5c8d1a5f.png">

<img width="895" alt="Screen Shot 2020-07-05 at 10 56 31 PM" src="https://user-images.githubusercontent.com/65197724/86551585-72d3fa00-bf13-11ea-88aa-663e5cb5ece4.png">


## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Websites Referenced
- To generate a random string for the password, I referenced StackOverflow: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
- To incorporate a button so that the user can copy the password to the clipboard, I used code from w3schools: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp