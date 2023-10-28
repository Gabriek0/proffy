'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Header } from '../../components/Header';
import { Select } from '../../components/Select';
import { ArrowRight, ProffyLogo } from '../../icons';
import { ClassCard } from '../../components/ClassCard';
import { useCallback, useEffect, useState } from 'react';
import { listClass } from '../services/api/classApi';

const classFilters = z.object({
  class: z.string(),
});

type ClassFilterSchemaInput = z.input<typeof classFilters>;
type ClassFilterSchemaOutout = z.output<typeof classFilters>;

export default function CreateClassPage() {
  const [classes, setClasses] = useState<any>([]);

  const methods = useForm<ClassFilterSchemaInput>({
    resolver: zodResolver(classFilters),
  });

  const listClass = useCallback(async () => {
    const response = await listClass()

    console.log(response)

    setClasses(response)
  }, [])


  useEffect(() => {
    listClass()
  }, [listClass])

  return (
    <>
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

      <div className="flex items-center justify-center mt-[-45px]">
        <div className="flex justify-between w-[800px]">
          <Select.Root>
            <Select.Title title="Matéria" labelFor="class" />
            <Select.Options
              selectId="class"
              options={['matemática', 'portugues']}
            />
          </Select.Root>

          <Select.Root>
            <Select.Title title="Dia da semana" labelFor="weekDay" />
            <Select.Options
              selectId="weekDay"
              options={[
                'segunda',
                'terça',
                'quarta',
                'quinta',
                'sexta',
                'sábado',
                'domingo',
              ]}
            />
          </Select.Root>

          <Select.Root>
            <Select.Title title="Horário" labelFor="class" />
            <Select.Options selectId="class" options={['00:00']} />
          </Select.Root>
        </div>
      </div>

      <div className="flex items-center justify-center mt-28"></div>
    </>
  );
}
