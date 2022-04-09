import router from 'next/router';

const Login = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const { username_email, password } = e.target;
    const body = {
      username_email: username_email.value,
      password: password.value,
    };

    const data = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
     },
     body: JSON.stringify(body),
    }).then(res=>res.json()).catch(err=>err);

    router.push('/');
  }

  return (
    <>
      <Head>
        <title>Login - Facebook</title>
      </Head>

      <main class="flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-semibold">Login</h1>
          <p className="text-sm text-gray-500">Login with credencials</p>

          <form {..{onSubmit}} className="mt-4">
            <div className="my-4">
              <input type="text" placeholder="Username or Email"
                id="username_email" name="username_email"
                className="" required
              />

              <input type="password" placeholder="Password"
                id="password" name="password"
                className="" required
              />
            </div>

            <button type="submit"
              className="">
              Login
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
