import { PersonRoutes } from './cases/routes/persons.routes';

describe('workspace-project App', () => {
  let personRoutes: PersonRoutes;

  beforeEach(() => {
    personRoutes = new PersonRoutes();
  });

  // it('Criar um novo usuário', () => {
  //   expect(personRoutes.getPerson()).toEqual(5);
  // });

  // it('Atualizar um usuário', () => {
  //   expect(personRoutes.getPerson()).toEqual(5);
  // });

  it('Lista usuários cadastrados', () => {
    expect(personRoutes.getPersons()).toBeGreaterThan(1);
  });

  it('Mostra um usuário especifico', () => {
    const personId:number = 1;
    expect(personRoutes.getPerson(personId)).toEqual('Paulo');
  });

  // it('Atualizar um usuário', () => {
  //   const personId:number = 1;
  //   const data:any = {
  //     nome: 'Pedro',
  //     sobrenome: 'Perreira'
  //   };
  //   expect(personRoutes.updatePerson(personId,data)).toEqual(1);
  // });

  

  // it('Deleter um usuário', () => {
  //   // expect(personRoutes.getPerson()).toEqual(5);
  // });


});
