import { TodosContext } from './todos.po';
import {by, element, browser} from "protractor";

describe('Create a new todo', () => {
  let todosContext: TodosContext;

  beforeEach(() => {
    todosContext = new TodosContext();
  });

  it('I should see submit button when fill enter a to-do input', () => {
    const label = 'I am a new todo';

    todosContext.screenshot('input-before');

    todosContext.fillTodoInput(label).then(() => {
      todosContext.screenshot('input-filled');
    });

    expect(todosContext.getElementTodoInput().getAttribute('value')).toBe(label);
  });

  it('I should see new todo after submit form', () => {
    const label = 'FOo baz Baz Bouz';
    expect(todosContext.getLabels()).toEqual([]);

    todosContext.fillTodoInput(label).then(() => {
      element(by.css('form[name=addItemForm] button')).click().then(() => {
        todosContext.getLabels().then(result => {
          todosContext.screenshot('list');
        });
        expect(todosContext.getLabels()).toContain(label);
      })
    });
  })
});
