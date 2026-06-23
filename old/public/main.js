const app = document.querySelector('#app');
const input = app.querySelector('#task-input');
const addButton = app.querySelector('#add-button');
const list = app.querySelector('#list');
const itemTemplate = list.querySelector('template');

const API = '/items';

async function getItems() {
  const res = await fetch(API);
  return res.json();
}

async function addItem(title) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });

  return res.json();
}

async function deleteItem(id) {
  await fetch(`${API}/${id}`, {
    method: 'DELETE'
  });
}

function createDomTask(item) {
  const task = itemTemplate.content.cloneNode(true);
  const li = task.querySelector('li');

  li.querySelector('.title').textContent = item.title;

  li.querySelector('.bt-delete').addEventListener('click', async () => {
    await deleteItem(item.id);
    li.remove();
  });

  return task;
}

async function loadItems() {
  const items = await getItems();

  items.forEach(item => {
    list.appendChild(createDomTask(item));
  });
}

async function createNewTask() {
  const title = input.value.trim();
  if (!title) return;

  const item = await addItem(title);
  list.appendChild(createDomTask(item));

  input.value = '';
}

addButton.addEventListener('click', createNewTask);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') createNewTask();
});

loadItems();