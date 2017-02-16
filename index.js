exports.handler = function (event, context) {
  console.log("Hello Serverless pipeline!!!");
  context.succeed({message:'Hello Serverless pipeline!!!'});
};
