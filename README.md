<h1 align="center"><strong>Swanky Icons</strong></h1>


#### React component library of 54 customizable interactive icons

<h1 align="left"><strong>Basic Usage</strong></h1>


Install via:

```
npm install @sebthedev/swanky-icons
```

```
import { RealPieIcon } from '@sebthedev/swanky-icons'

<RealPieIcon />         // Icon with default parameters
<RealPieIcon            // Icon with custom sizing and color 
    width={100}
    height={100}
    fillColor="red"
/>                      
```

<h1 align="left"><strong>Props Reference</strong></h1>


| Prop | Description | Default |
| :-------------:  | :-------------: | :-------: |
| ```width?: number or string``` | The width of the icon in px | ```30``` |
| ```height?: number or string``` | The height of the icon in px | ```30``` |
| ```fillColor?: string``` | The primary color of the icon. Can be a hex value, rgb, or predefined color | ```#ffffff``` |

---
