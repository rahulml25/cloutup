import Head from 'next/head';
import router from 'next/router';

const Signup = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const {
      username, firstname, lastname,
      email, password, confirm_password
    } = e.target;

    if (password.value !== confirm_password.value) return;

    const body = {
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
    };

    const data = await fetch('/api/users/signup', {
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
        <title>Signup - Facebook</title>
      </Head>

      <main className="flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-semibold">Signup</h1>
          <p className="text-xs text-gray-500">Create your account</p>

          <form {...{onSubmit}} className="mt-4">
            <div className="my-3">
              <input type="text" placeholder="Username"
                id="username" name="username"
                className="" required
              />

              <div className="flex space-x-2">
                <input type="text" placeholder="Firstname"
                  id="firstname" name="firstname"
                  className="" required
                />

                <input type="text" placeholder="Lastname"
                  id="lastname" name="lastname"
                  className="" required
                />
              </div>

              <input type="email" placeholder="Email"
                id="name" name="email"
                className="" required
              />

              <input type="password" placeholder="Password"
                id="password" name="password"
                className="" required
              />
            </div>

            <button type="submit"
              className="">
              Signup
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Signup;
