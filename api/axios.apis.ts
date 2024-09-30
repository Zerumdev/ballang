import axios from "axios";

axios
  .get("https://api.ballang.yoojinyoung.com/products")
  .then((Response) => {
    console.log(Response.data);
  })
  .catch((Error) => {
    console.log(Error);
  });
