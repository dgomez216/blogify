const posts = [
  {
    title: "Primer post",
    summary: "Esto es un post",
    content: "Nuestro primer post desde el servidor",
  },
  {
    title: "Segundo post",
    summary: "Esto es un post",
    content: "Felicitaciones",
  },
];

exports.getMessage = (req, res) => {
  res.send("Hola Mundo!");
};

exports.getPosts = (req, res) => {
  res.status(200).json(posts);
};

exports.addPost = (req, res) => {
  console.log(req.body);
  posts.push(req.body);
  res.status(201).json("Post creado");
};