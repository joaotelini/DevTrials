document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    register();
  });

async function register() {
  const fullName = document.getElementById("name").value;
  const cpf = document.getElementById("cpf").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const apiUrl = "http://localhost:4000/api/users";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, cpf, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("Erro:", data.message);
      return;
    }

    console.log("Usuário registrado com sucesso:", data.message);
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro ao registrar. Tente novamente.");
  }

  document.getElementById("registerForm").reset();
}
