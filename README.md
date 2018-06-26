# Mail Tracker Widget

A simple ReactJS dashboard-type widget that displays emails received, stamped,
and uploaded.

## Getting Started

From inside of your React project directory, run

```script
npm install @amajor/widget-mail-tracker
```

Once installed, include it in your application by importing the file and
inserting the component with your desired props.

```js
import React, { Component } from 'react';
import MailTracker from '@amajor/widget-mail-tracker';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Your App</h1>
          <h2 className="App-title">With the mail tracker below.</h2>
        </header>

        <MailTracker
          numberReceived={103}
          numberStamped={101}
          numberUploaded={99}
        />

      </div>
    );
  }
}

export default App;
```

## Configure

This component accepts the following properties:

* `numberReceived` _(number)_ - for example "103"
* `numberStamped` _(number)_ - for example "101"
* `numberUploaded` _(number)_ - for example "99"

When entered in, the component will flow horizontally, or if given less space,
will collapse into a column. We use the grid from Bootstrap to manage this.

### Horizontal Layout

<img src="https://github.com/amajor/widget-mail-tracker/blob/master/docs/images/horizontal.png" title="Horizontal Layout" />

### Vertical Layout

<img src="https://github.com/amajor/widget-mail-tracker/blob/master/docs/images/vertical.png" title="Vertical Layout" width="200px" />
