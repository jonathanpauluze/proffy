import React, { useCallback } from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/icons/whatsapp.svg'

import './styles.css';

export interface Teacher {
  id: string;
  avatar: string;
  name: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConnection = useCallback(() => {
    api.post('/connections', {
      user_id: teacher.id
    })
  }, [teacher.id]);

  return (
    <article className="teacher-item">
      <header>
        <img
          src={teacher.avatar}
          alt={teacher.name}
        />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;