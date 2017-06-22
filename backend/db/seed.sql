DROP TABLE IF EXISTS afkBlog;


  CREATE TABLE afkBlog(
  id SERIAL PRIMARY KEY,
  post TEXT NOT NULL,
  featured_image VARCHAR (255) NOT NULL,
  image1 VARCHAR (255) NOT NULL,
  image2 VARCHAR (255) NOT NULL,
  image3 VARCHAR (255) NOT NULL,
  contents TEXT NOT NULL
);


INSERT INTO afkBlog (post, featured_image, image1, image2, image3 ,contents) VALUES (
  'Manhattanhenge',
  'http://imgur.com/a/jPeOY',
  'http://imgur.com/gallery/Po6aDSc',
  'http://imgur.com/gallery/ONTaCBo',
  'http://imgur.com/gallery/TZZ24NV',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
)
