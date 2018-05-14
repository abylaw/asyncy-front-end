# Storyscript

Storyscript is a syntax-light high-level programming language that **orchestrates microservices**.
Application logic is expressive and transparent by requiring **named arguments** in all functions and microservices.
Built-in **service discovery** provides a powerful environment for finding services and autocomplete to assist with inputs and outputs.

[[toc]]

## Why Storyscript

Storyscript (or Stories for short) focuses on the **application logic** rather than all the *tape and glue* that bind applications together. The underlining services have a standard for **logs, metrics, fail-over, rate-limiting, tracebacks and scaling** which eliminates the need to write it within the application. This cultivates a development environment primed for rapid application development in a production-ready platform.

Let's build a quick application for example. Our goals are to upload, analyze, compress and archive a video. A non-trivial application but in a **couple lines of Storyscript** we made it.

```coffeescript
# Registers with Asyncy Server as an endpoint
http-endpoint method:'post' path:'/upload' as request, response
    # generate a unique id for this upload
    id = uuid uuid4

    video = request.files.myUploadedVideo

    # using https://machinebox.io find the video topics
    topics = machinebox/videobox content:video

    if 'nudity' in details
        response finish code:400 message:'Sorry, nudity found in image.'
    else
        response finish code:201 message:'Success! Processing asynchronously.'

    # save record in mongodb
    mongodb insert db:'uploads' data:{'id': id, 'topics': topics}

    # using https://github.com/xiph/daala let's compress it to h264
    video = xiph/daala video:video codex:'h264'

    # upload to AWS S3
    s3 put target:'/video/{{id}}.mp4' data:video
```

In comparison, the same application would likely take **hundreds of lines of code**, not to mention that each service above includes metrics, logging and scaling out-of-the-box.

::: tip
**Give it a spin!** Source code is on [GitHub](https://github.com/asyncy/example-upload-video).
:::

> Blog: [Why Asyncy built a DSL called Storyscript](/)


## Syntax Overview

```coffeescript
###
Meet Storyscript
###

# Strings
myString = "Hello"
stringWithPlaceholders = "Say {{string}}!"
# >>> Say Hello!

# Numbers
one = 1
onethree = 1.3

# Boolean
foo = true
bar = false

# List
letters = ['a', 'b', 'c']
letters[0]
# >>> 1

# Object
fruit = {'apple': 'red', 'banana': 'yellow'}
fruit.apple
# >>> red
fruit['banana']
# >>> yellow

# Regexp
pattern = /^foobar/
('foobar' like pattern)
# >>> true

# Files
path = `/folder/name.ext`

# Null
empty = null

# Conditions
if one > 1
    # then do this
else if one == 1
    # then do this
else
    # do this

# Loops
foreach siblings as child
    # ...

while foobar
    # ...

# Services
output = service cmd key:value

# Functions
function walk distance:number -> someOutput:sting
    # ...
    return "Ok, walked {{distance}}km!"

walk distance:10
# >>> Ok, walked 10km!

# Chaining calls
myService cmd foo:(myString split by:',')
              bar:(myObject find key:(myList random))

# import another story
import `stories/folder/file.story` as MyStory
# Call a method in that story
res = MyStory.MyFunction key:value
```


## Strings

```coffeescript
data = "foobar"

long_string = "Hi Friend,
This is a long string."
# >>> "Hi Friend, This is a long string."

more_data = """
    The quick brown fox
    jumps over the lazy dog.
"""
# >>> The quick brown fox\njumps over the lazy dog.

where = "Earth"
data_formatted = "Hello, {{where}}"
# >>> "Hello, Earth"
```

::: v-pre
Like many traditional programming languages, Storyscript supports strings as delimited by the `"` or `'` characters.
Storyscript also supports string interpolation within "-quoted strings, using `{{ variable }}`.
Single-quoted strings are literal. You may even use interpolation in object keys.
:::

Multiline strings are allowed in Storyscript.
Lines are joined by a single space unless they end with a backslash.
Indentation is ignored.

Block strings, delimited by `"""` or `'''`, can be used to hold formatted or indentation-sensitive text (or, if you just don’t feel like escaping quotes and apostrophes).
The indentation level that begins the block is maintained throughout, so you can keep it all aligned with the body of your code.

Double-quoted block strings, like other double-quoted strings, allow interpolation.

### String Methods

```coffeescript
"abc" length
# >>> 3

"abc" replace before:'b' after:'Z'
# >>> aZc

"foo bar" capitalize
# >>> Foo Bar

"a,b,c" split by:','
# >>> ['a', 'b', 'c']

"abc" upper
# >>> ABC

"ABC" lower
# >>> abc
```

## Numbers

```coffeescript
int = 1
number = 1.2
```


## Comments

```coffeescript
###
Large
  Comment
Block
###

# Inline comment

foo = "bar"  # end of line comment
```

In Storyscript, comments are denoted by the `#` character to the end of a line,
or from `###` to the next appearance of `###`.
Comments are ignored by the compiler, though the compiler makes its best effort at reinserting your comments into the output JavaScript after compilation.


## Boolean

```coffeescript
happy = true
sad = false
```

## Lists

```coffeescript
list_inline = ["string", 1, 2]
list_multiline = [
  "string",
  1,
  2
]
```

### List Methods

```python
['a', 'b', 'c'] length
# >>> 3

['a', 'b', 'c'] join by:','
# >>> a,b,c

['a', 'b', 'c'] reverse
# >>> ['c', 'b', 'a']

['a', 'b', 'c'] shift from:'left'
# >>> a
# the list becomes ['b', 'c']

['a', 'b', 'c'] index of:'b'
# >>> 1

['1', '2', '3'] apply function:Int
# >>> [1, 2, 3]

['a', 'b', 'c'] random
# randomly choose >>> a
```

## Objects

```coffeescript
object_inline = {'foo': 'bar', 'apples': 'oranges'}
object_multiline = {
  'foo': 'bar',
  'apples': 'oranges'
}
```

### Object Methods

```python
{'a': 1, 'b': 2} length
# >>> 2

{'a': 1, 'b': 2} keys
# >>> ['a', 'b']

{'a': 1, 'b': 2} values
# >>> [1, 2]

{'a': 1, 'b': 2} items
# >>> [['a', 1], ['b', 2]]

{'a': 1, 'b': 2} pop key:'a'
# >>> 1
# resulting object = {'b': 2}
```


## Conditions

```coffeescript
if foo = bar
  # ...
else if foo > bar
  # ...
else
  # ...

if (foo > 0 or cat is not dog) or foobar like /regexp/
  # ...
```

`if`/`else` statements can be written without the use of parentheses and curly brackets. As with functions and other block expressions, multi-line conditionals are delimited by indentation.

## Looping

```coffeescript
foreach siblings as child
    # ...

while foobar is true
    # ...
```

In Storyscript, loops provide a way to iterate over data.

Data can be collected during loops and passed to an output list.

```coffeescript
myList = [1, 2, 3]
result_list = foreach myList as item
    # ...
    yield (item + 10)
    # ...
    yield (item + 5)

log myList
# >>> [11, 6, 12, 7, 13, 8]
```

Loops have reserved keywords for ending and continuing loops.

```coffeescript
foreach siblings as child
    # ...
    if do_end_loop
        end loop
    if do_skip_to_next_item
        continue loop
    # ...
```

## Functions

```coffeescript
function getUser id:int -> user:object
    someone = (sql query:'select * from users where id={{id}} limit 1;')[0]
    someone.contact = fullcontact person email:someone.email
    return someone

userA = getUser id:7
userB = getUser id:10
```

The example above is a function what queries the database and also downloads their FullContact profile.

Function must define their inputs and outputs which help with transparency, autocomplete and type checking during the Asyncy CI process.


## Services

```coffeescript
# Service with command and arguments Service
service cmd key:value foo:bar

# Service without command
service key:value foo:bar

# Service output assigned to variable
foobar = service cmd key:value

# Arguments may by indented under the service
service cmd key:value
            foo:bar
```

In Storyscript, the syntax to run a service appears natural and arguments are named for transparency.

These services may be Docker containers that expose commands and define their interface. More details in [Finding and Building Services](/services/)

## Streaming Service

Services may stream data and the output is submitted back to Storyscript.

```coffeescript
service cmd key:value as data
    # every event will enter this block
```

A good example of this is streaming Tweets by hashtag.

```coffeescript
twitter stream hashtag:'asyncy' as tweet
    if 'awesome' in tweet.message
        twitter retweet id:tweet.id
```

The example above will yield new tweets as they are posted to Twitter. Every new tweet will be passed into the block below in the variable `tweet`.


## Importing

```coffeescript
import `subfolder/users.story` as Users
# Call the function "get" which is defined in the Storyscript
res = Users.get key:value
```

Import other Storyscripts by using the `import file as name` syntax.

The file path is **relative** to the Storyscript where the `import`. Use `/folder/...` for importing from the project root or `../folder` to import from the parent folder.

::: tip
The `.story` is optional. `/stories/users.story` is equivalent to `/stories/users`.
:::

## Regular Expressions

```coffeescript
pattern = /^foo/

if 'foobar' like pattern
    log 'Awesome!'
```

Regular expressions are supported without any special characters of escaping necessary.

## Regular Expressions Methods

```coffeescript
pattern = /(?P<key>\w):(?P<value>\w)/
myString = 'foo:bar'

log (pattern find data:myString)
# >>> {"key": "foo", "value": "bar"}

log (pattern matches data:myString)
# >>> true
```

## Files

Asyncy provides access to a shared volume, unique to the Application. This volume should be treated as an ephemeral file storage, where contents are deleted at the end of the Story.

```coffeescript
filename = `/folder/hello.txt`
file write path:filename data:"Hello World"

log (file read path:filename)
# >>> "Hello World"
```

Using the tick character (``` ` ```) to for assigning file paths.

Repository clone contents are located in the `/app/` directory, which is read-only. For example, `/app/readme.md` will resolve to the Applications `./readme.md` file.

## Wait and Cron

::: warn
**Coming Soon!** This behavior is not yet developed. Feedback welcome!
:::

Asyncy has built-in delays that can be applied seamlessly in Storyscript.

```coffeescript
wait time:'5 days'
  # do this in 5 days

cron hour:9
  # daily at 9am do this...
```

The wait and cron are a special service that use Asyncy internal scheduler.

## Async
::: warn
**Coming Soon!** This behavior is not yet developed. Feedback welcome!
:::

Asynchronous commands provide a way to scale out processes and apply multithreading to data flow.

```coffeescript
res = async some_long_process cmd
# ...
log res.data  # will wait until res is complete until data is resolved

# run through all users at the same time, spawning users(N) processes
async foreach users as user
  user.profile = fullcontact person email:user.email
```
