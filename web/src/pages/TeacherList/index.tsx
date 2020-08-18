import React, { useState, useCallback, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import searchIcon from '../../assets/icons/search.svg';

import './styles.css';
import api from '../../services/api';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const searchTeachers = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    const teachers = response.data;

    setTeachers(teachers);
  }, [
    subject,
    week_day,
    time
  ]);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader
        title="Estes são os proffys disponíveis."
      >
        <form id="search-teachers" onSubmit={searchTeachers}>
        <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            options={[
              { value: 'Front-End', label: 'Front-End' },
              { value: 'Back-End', label: 'Back-End' },
              { value: 'Infra', label: 'Infra' },
              { value: 'Database', label: 'Database' },
              { value: 'DevOps', label: 'DevOps' },
              { value: 'DevSecOps', label: 'DevSecOps' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(event) => setWeekDay(event.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />

          <button type="submit">
            <img src={searchIcon} alt="buscar" title="buscar" />
          </button>
        </form>
      </PageHeader>
    
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  );
}

export default TeacherList;
