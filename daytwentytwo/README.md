# React JS Day 22

- For onclick event, use React.MouseEvent<HTMLButtonElement>

## Setting Up Tailwind CSS

- In order to setup tailwind css follow these commands.

``` Bash

npm install tailwindcss @tailwindcss/vite

```

- Add the following to your vite configuration, i.e your vite.config.ts file

``` TypeScript

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ]
})

```

- Add an import to your css file that imports tailwind

``` css

@import "tailwind";

```

- With this, tailwind has been successfully configured.