// import { Api } from "./mvc/api.js";
/* ~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~ */
const Api = (() => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const todoPath = 'todos';

  const getTodos = () => fetch([baseUrl, todoPath].join('/'))
    .then((response) => response.json());

  return {
    getTodos
  }; // <---------- Api
})();

/* ~~~~~~~~~~~~~ View ~~~~~~~~~~~~~ */
const View = (() => {

  const domstr = {
    container: '#todolist_container',
    deletebtn: '.deletebtn',
  };
  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  }
  const createTmp = (arr) => {
    let tmp = '';
    arr.forEach(ele => {
      tmp += `
        <li>
          <span>${ele.title}</span>
          <button id="${ele.id}" class="deletebtn">X</button>
        </li>
      `;
    });
    return tmp;
  }

  return {
    domstr,
    render,
    createTmp
  };
})();

/* ~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~ */
const Model = ((api, view) => {

  class State {
    #todolist = [];

    get todolist() {
      return this.#todolist;
    }

    set todolist(newtodos) {
      this.#todolist = newtodos;

      const container = document.querySelector(view.domstr.container);
      const tmp = view.createTmp(this.#todolist);
      view.render(container, tmp);

      const btns = document.querySelectorAll(view.domstr.deletebtn);
      btns.forEach(btn => {
        btn.addEventListener('click', event => {
          this.todolist = this.todolist.filter((todo) => {
            return +todo.id !== +event.target.id;
          });
        });
      })
    }
  }

  const getTodos = api.getTodos;

  return {
    getTodos,
    State
  }
})(Api, View);

/* ~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~ */
const Controller = ((model, view) => {
  const state = new model.State();

  const init = () => {
    model.getTodos().then(todos => {
      state.todolist = todos;
    });
  }

  return { init };
})(Model, View);

Controller.init();
