import { Admin } from './Admin';
import { AlunoProfile } from './AlunoProfile';
import { DashboardProps } from '../../config/Types/TypesSystemProfile';

function SwitchEntity({ entity }: DashboardProps) {
  switch (entity) {
    case 'Professor':
      return <Admin />

    case 'Aluno':
      return <AlunoProfile />
  };
};

export default function Dashboard(
  {
    entity
  }: DashboardProps) {
  return <SwitchEntity entity={entity} />
};

