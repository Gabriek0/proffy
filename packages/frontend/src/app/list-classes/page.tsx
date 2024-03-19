'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { GetManyClassDto } from '@open-api';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ClassCard } from '../../components/ClassCard';
import { Header } from '../../components/Header';
import { Select } from '../../components/Select';
import { ArrowRight, ProffyLogo } from '../../icons';
import { listClassApi } from '../services/api/classApi';

const classFilters = z.object({
  class: z.string(),
});

type ClassFilterSchemaInput = z.input<typeof classFilters>;

export default function CreateClassPage() {
  const [classes, setClasses] = useState<GetManyClassDto['classes']>([]);

  useEffect(() => {
    listClassApi().then((data: any) => setClasses(data));
  }, []);

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

      <div className="flex flex-col items-center justify-center mt-28">
        {classes.length &&
          classes.map((item) => (
            <ClassCard.Root key={item.id}>
              <ClassCard.TeacherInfo.Root>
                <ClassCard.TeacherInfo.Avatar
                  imageUrl={
                    item.owner.avatarUrl ??
                    'https://avatars.githubusercontent.com/u/52966246?v=4'
                  }
                  alt="proffy"
                />

                <ClassCard.TeacherInfo.ClassInfo
                  className={item.subject}
                  teacherName={item.owner.name}
                />
              </ClassCard.TeacherInfo.Root>

              <ClassCard.TeacherBio>{item.owner.bio}</ClassCard.TeacherBio>

              <ClassCard.ScheduleRoot>
                <ClassCard.ScheduleItem hour="123" weekDay="1" />
              </ClassCard.ScheduleRoot>

              <ClassCard.FooterRoot>
                <ClassCard.FooterPrice price={item.cost} />
                <ClassCard.FooterButton />
              </ClassCard.FooterRoot>
            </ClassCard.Root>
          ))}
      </div>
    </>
  );
}
