const errorHandler = (err, req, res, next) => {
  console.log(
    `ERROR: [${new Date().toISOString()}] - [${req.method} - ${
      req.originalUrl
    }]: ${err.message}`
  );
  res.status(500).send(`Error: ${err.message}`);
};

export default errorHandler;
