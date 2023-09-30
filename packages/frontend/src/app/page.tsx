import Link from 'next/link';

export default async function Index() {
  return (
    <>
      <h1 className="text-purple-400 font-bold">Proffy</h1>
      <Link href="login" className="block underline">
        Login
      </Link>
      <Link href="/create-account" className="underline">
        Criar conta
      </Link>
    </>
  );
}
