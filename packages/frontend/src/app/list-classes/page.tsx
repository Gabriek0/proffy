'use client';

import { Header } from '../../components/Header';
import { ArrowRight, ProffyLogo } from '../../icons';

export default function CreateClassPage() {
  return (
    <Header.Root>
      <Header.NavRoot>

        <Header.NavIcon>
          <ArrowRight />
        </Header.NavIcon>

        <Header.NavPageName pageName="Estudar" />

        <Header.NavLogo>
          <ProffyLogo />
        </Header.NavLogo>

      </Header.NavRoot>
      <Header.ContentRoot>

        <Header.ContentText>
          Estes são os <br />
          proffys disponíveis.
        </Header.ContentText>

        <Header.ContentInfo />
        
      </Header.ContentRoot>
    </Header.Root>
  );
}
