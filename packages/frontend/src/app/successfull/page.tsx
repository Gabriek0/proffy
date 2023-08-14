'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { Button } from '../../components/Button';
import { Success } from '../../components/Layout/Success';

type Message = { [key in MessageOptions]: MessageOptionData };
type MessageOptions = 'create-account' | 'reset-password' | 'create-class';
type MessageOptionData = {
  title: string;
  subtitle: string;
  button: string;
};

export default function SucessfullPage() {
  const params = useSearchParams();
  const msg = String(params.get('message')) as MessageOptions;

  const messages = useMemo(() => {
    const message: Message = {
      'create-account': {
        title: 'Cadastro concluído',
        subtitle:
          'Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.',
        button: 'Fazer Login',
      },
      'reset-password': {
        title: 'Redefinição enviada!',
        subtitle:
          'Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.',
        button: 'Voltar ao login ',
      },
      'create-class': {
        title: 'Cadastro salvo!',
        subtitle:
          'Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp. ',
        button: 'Acessar lista',
      },
    };

    return message[msg] || message['create-account'];
  }, []);

  return (
    <Success.Root>
      <Success.Title>{messages.title}</Success.Title>
      <Success.Subtitle>{messages.subtitle}</Success.Subtitle>
      <Button className="max-w-[170px]">{messages.button}</Button>
    </Success.Root>
  );
}
