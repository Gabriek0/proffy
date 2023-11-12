import { WhatsAppLogo } from '../../icons';

export function ClassCardFooterButton() {
  return (
    <div>
      <button className="flex bg-green p-2 rounded-md">
        <WhatsAppLogo />
        <span className="text-white px-4">Entrar em contato</span>
      </button>
    </div>
  );
}
