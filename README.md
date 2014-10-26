# Moment Interpret
## An intepreter built on top of MomentJS

```
npm install moment-interpret
```

```
var interpret = require('moment-interpret');
```

### Examples
```
interpret('3 days ago'); --> Returns three days from the current time
interpret('three hours ago'); --> Also supports written out words

interpret('5 years from now');
interpret('eleven months from now');
```

### Formatting
This module is built on top of MomentJS, so it supports all the same formatting MomentJS gives you.

For example:
```
interpret('4 days ago').format('YYYY-MM-DD');
```

To see all the different formatting options, please look at the [MomentJS docs](http://momentjs.com/docs/).

### Notes
* Currently only supports numbers less than 100
* Supports the following wordings:
  * '...ago'
  * '...from now...'
* Support the following types of times:
  * Years
  * Months
  * Days
  * Hours
  * Minutes
  * Seconds

### Todo
* Support numbers 100 or greater
* Add more options for possible wordings