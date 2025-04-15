export const userValidation = (req, res, next) => {
  const { fullName, email, password, cpf } = req.body;

  if (!fullName || !email || !password || !cpf) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password.length < 5) {
    return res
      .status(400)
      .json({ message: "Password must be at least 5 characters long" });
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (!/^\d{11}$/.test(cpf)) {
    return res.status(400).json({ message: "Invalid CPF format" });
  }

  next();
};
