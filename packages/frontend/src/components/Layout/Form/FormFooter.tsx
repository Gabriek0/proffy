import Link from 'next/link';
import { PurpleHeart } from '@front/icons';

export function FormFooter() {
  return (
    <footer className="absolute bottom-0 h-fit w-full py-12 flex justify-between items-start">
      <section className="flex flex-col items-start">
        <span className="text-purple-500 font-normal text-base">
          Não tem conta?
        </span>
        <Link
          href="/create-account"
          className="text-purple-300 font-bold underline"
        >
          Cadastre-se
        </Link>
      </section>

      <section className="flex items-center gap-[.5rem]">
        <p className="text-gray-40 font-normal text-sm">É de graça</p>
        <PurpleHeart />
      </section>
    </footer>
  );
}
