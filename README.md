# <img src="https://user-images.githubusercontent.com/632330/57006043-fb823800-6ba2-11e9-8fa9-eba94b8011b5.png" width="30px"/> Brewerwall Logo Component

## Installation
Install through npm:
```shell
npm install @brewerwall/logo
```

## USE
Use is pretty straight forward.  

```jsx
import React, { Component } from "react";
import Logo from "@brewerwall/logo";

class Home extends Component 
{
    render() 
    {
        return (
            <Logo size="hero" showTitle={true} />
        );
    }
}
```

There are 4 additional props:
```
- type
- textColor
- size
- showTitle
```

### Type
This will render different SVG types of the logo.  

Options: `light_color`, `light_transparent`, `light_solid`, `dark_color`, `dark_transparent`, `dark_solid`

Default: `dark_color`
```
<Logo type="light_color" />
```

### Text Color
This will set the color of the title text.

Options: Any CSS valid color.

Default: `black`
```
<Logo textColor="white" />
```

### Size
This will render the entire logo and text proportionally to preset sizes.

Options: `extra-small`, `small`, `medium`, `hero`

Default: `small`
```
<Logo size="hero" />
```

### Show Titles
This will toggle the visibilty of the title in the logo.
```
<Logo showTitle={true} />
```
