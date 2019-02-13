# Simplicated

Lets make something complicated simple.

While working on a project where I needed to write tests for a lot of files. Recreating the same file structure for each under the test folder, and then adding all the testing imports and setup. Doing the same thing over and over, I decided to write a little code to do it for me.

Download the app at the same root location as your project.
Run `npm install simplicated`

Navigate into the file.
You can watch it work by typing `node cli /myFolder/someSubFolder/twoDeepFolder/underground/someOriginalText.java`

You then need to update a couple parameters to your needs.
1) Update the `finishLocation` to your folder location.
2) Open the `boilerCode.java` and update if you are using Java. Alternatively you can have any boiler code file you want (JS Html) just fill it in and point to it.
3) Change the custom word you want to parce for.
4) Change the custom text you are wrapping around the custom word.
5) in the command line type in node cli `your file path`.
6) Watch in amazement as your files are created.

Hope this is helpful. Reach out if you have any features you want added.

Thanks
Meg
