// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


make_shirt("L", "I love TypeScript")
make_shirt("M", "I love JavaScript")
make_shirt("L", "I love Panaverse")

function make_shirt(size, message) {
    console.log("Size: " + size + " \n" + message)
}