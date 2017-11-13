# Frappe Charts with React

Copy the react component as in `chart.js`

And now include and use the created React component (dont forget to include the
css):

```jsx
import Chart from './chart'
import 'frappe-charts/dist/frappe-charts.min.css'

<Chart
  title="Test"
  data={{
    labels: [
      '12am-3am',
      '3am-6am',
      '6am-9am',
      '9am-12pm',
      '12pm-3pm',
      '3pm-6pm',
      '6pm-9pm',
      '9pm-12am'
    ],
    datasets: [
      {
        title: 'Some Data',
        color: 'light-blue',
        values: [25, 40, 30, 35, 8, 52, 17, -4]
      },
      {
        title: 'Another Set',
        color: 'violet',
        values: [25, 50, -10, 15, 18, 32, 27, 14]
      },
      {
        title: 'Yet Another',
        color: 'blue',
        values: [15, 20, -3, -15, 58, 12, -17, 37]
      }
    ]
  }}
/>
```

## Configuring

Every property of frappe-chart is set automatically if its set on the react
component Example:

```jsx
...
<Chart
  title="Test"
  type="line"
  show_dots={false}
  heatline
  region_fill
  data={{
    labels: ['1'],
    datasets: [
      {
        values: [1]
      }
    ]
  }}
/>
```

## Click handler

If you provide a property called `onSelect` you will receive events on click
(only barchart)
