# File Storage Logic

- Turns out, it is not a good idea to store the actual files in your database, as it is not optimized to do so, instead, you have to store them in a file storage system, and just keep references to those files, e.g URLs, paths, metadata in your database.

- You can use AWS S3 for this, User uploads file via frontend, the backend receives the file, the backend uploads the file to cloud storage, and then the backend stores metadata in the database e.g filename
, url, size, owner, visibility ...

- So S3 it is then, S3 stands for Simple Storage Service