# CS50x Final Project - Kanji N5 Quiz
#### Video Demo: https://youtu.be/mhodlNxp1lo
#### Description:
This is a quiz website for students who want to test their skills on Kanji, one of the Japanese letters that most people struggle to learn.

## File Explanation
index.html contains html code that becomes the document of the website that I created. Inside, there are elements that become the root for elements that will later be displayed using javascript. I did not create a css file at all, therefore, in index.html, there are also a bootstrap files which will be used to do styling on the elements used.

quizData.json contains a json object that has the data for the quiz. Inside the object, there are several fields, namely, "question" for the question given, "options" for the options that can be selected, and "answer" for the answer key of the given question. There are 17 questions about how to read a kanji in the file.

script.js is the main program that makes the website run. in the file, there are several subprograms or functions that are used to display questions such as showingQuestion() to display the question display, showResult() to display the results of the quiz done, and setQuestion() to enter questions, options, and answers taken from quizData.json, to the question display.

In simple terms, the website works by adding elements and adjusting them to the parent element and deleting them.

## Conclusion

This website is made only with HTML, Javascript, and Bootstrap languages. I could have learned other frameworks such as angular, vue, react, and so on, but I chose to use only those three because I wasn't focusing on becoming a software engineer, but a cybersecurity specialist. That way, I could put more time into learning about networking, penetration testing, ethical hacking, scripting, and cybersecurity.
The appearance of this project certainly looks simple because at the time I was completing this project, I was interning as an IT Infrastructure and Operations team in a retail company in Indonesia so I didn't have enough time to add additional features and an attractive appearance to the project. So I hope that even though the appearance of this website is quite simple, it can be used as a medium to practice kanji reading skills.

There are still many things that can be developed. Still, as an amateur programmer and as someone who is also learning Japanese, this website is enough to help students who are learning Japanese, especially learning kanji.

https://azcat01.github.io/
