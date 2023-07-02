"use client";
import styles from "./signin.module.css";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  return (
    <>
      <section>
        {session ? (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <main className={styles.signin_container}>
              <div className={styles.signin_content}>
                <form className={styles.signin_content_form}>
                  <h1>Sign in or create an account.</h1>
                  <button onClick={() => signIn()}>Sign in</button>
                </form>
              </div>
            </main>
          </>
        )}
      </section>
    </>
  );
};

export default Login;
