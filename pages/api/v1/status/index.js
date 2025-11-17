function status(resquest, response) {
  response
    .status(200)
    .json({ message: "Vamos continuar progredindo, todos os dias!" });
}

export default status;
