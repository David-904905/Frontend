# Intersection Types

- Intersection types in TypeScript allow you to combine multiple types into a single type. The resulting type will have all the properties of each individual type. You create intersection types using the & operator.

- To get a ts config file, use the command tsc -init

- In order to change the version your typescript code compiles to, you have to change the value of the target key in the tsconfig.json file.

- Inorder to see the changes, run tsc only, this will compile all the typescript files.

- In order to compile a specific file, you have to specify the files arguments in the tsconfig.json file

``` TypeScript

"files": [
    "index.ts",
    "welcome.ts",
]

```

- In order to compile the files in a certain folder, you do so by using the include keyword.

``` TypeScript

"include": ["src/**/*"]

```

- You can also include specific files in a directory

``` TypeScript

"include": ["src/index.ts", "src/second.ts"]

```

- Or you can exclude a file by using the exclude keyword

``` TypeScript

"exclude": ["src/mul.ts"]

```

- The outdir, if specified the output files will be emitted into this directory. The directory structure of the original source is preserved.


- npm init -y is used to initialize a github repository

