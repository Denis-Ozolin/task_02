import INote from '../interfaces/Note.interfaces';

const getDates = (content: string) => {
  return content
    .split(' ')
    .filter((item) => item.split('/').length === 3)
    .join(', ');
};

const getCurrentDate = () => new Date().toDateString().split(' ').slice(1).join(' ');

const getActiveAmount = (category: string, elements: INote[]) => {
  return elements
    .filter((element) => element.category === category)
    .filter((element) => element.active).length;
};

const getArchivedAmount = (category: string, elements: INote[]) => {
  return elements
    .filter((element) => element.category === category)
    .filter((element) => !element.active).length;
};

const createNoteObj = (text: string, category: string) => {
  return {
    id: Date.now(),
    create: new Date().toDateString().split(' ').slice(1).join(' '),
    category: category,
    content: text,
    active: true,
  };
};

const createChangeObj = (id: number, content: string, category: string) => {  
  return {
    id,
    content,
    category,
  };
};

export {
  getDates,
  getCurrentDate,
  getActiveAmount,
  getArchivedAmount,
  createNoteObj,
  createChangeObj,
};
